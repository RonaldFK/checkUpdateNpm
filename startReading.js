import * as fs from 'fs';
import { processCheckVersion } from './processCheckVersion.js';

export const startReading = async () => {
  // creating folder for logs
  const folder = './checkUpdateNpmLogs';
  try {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  } catch (err) {
    console.error(err);
  }
  // void object to add list of dependencies from config file
  let configFileToRead = {};
  // void array to add list of dependencies
  let dependencies = [];

  let i = 0;
  try {
    // parsing data from config file
    const data = await fs.promises.readFile('./package.json', 'utf8');
    configFileToRead = JSON.parse(data);

    for (let elem in configFileToRead.dependencies) {
      const npmModuleName = Object.keys(configFileToRead.dependencies)[i];
      const npmModuleVersion = Object.values(configFileToRead.dependencies)[i];
      dependencies.push({
        nom_module: npmModuleName,
        currentVersion: npmModuleVersion,
      });
      i++;
    }
  } catch (err) {
    console.log(err);
  }
  // format version
  // tranform '^x.x.x' by 'x.x.x'
  dependencies.forEach((elem) => {
    let data = elem.currentVersion.split('');
    if (data[0] == '^') {
      data.shift();
      elem.currentVersion = data.join('');
    }
  });
  processCheckVersion(dependencies);
};
