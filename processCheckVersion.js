import * as fs from "fs";
import dayjs from "dayjs";

import { processUpdating } from "./processUpdating.js";
const date =
  "\n" + "\n" + dayjs().format("[Date :] YYYY-MM-DDTHH:mm:ss") + "\n";
// clone initial list to be able to add lastest online version.
let onlineVersion = [];
export const processCheckVersion = async (dependencies) => {
  onlineVersion = [...dependencies];

  //start process check online if update is available
  let ibis = 0;
  for (let i = 0; i < dependencies.length; i++) {
    const body = await fetch(
      `https://registry.npmjs.org/${dependencies[i].nom_module}`
    );
    const data = await body.json();
    const latestVersion = data["dist-tags"].latest;
    const describeModule = data.versions[`${latestVersion}`]?.description;
    onlineVersion[i].onlineVersion = latestVersion;
    onlineVersion[i].descriptionModule = describeModule;
  }

  // logging only version to update
  onlineVersion.forEach((elem) => {
    if (elem.onlineVersion != elem.currentVersion) {
      // console.log('idem', elem.currentVersion);
      fs.appendFile(
        "./checkUpdateNpmLogs/result.log",
        `Update available for  : ${elem.nom_module} | Current version : ${elem.currentVersion} | Update version : ${elem.onlineVersion}\n`,
        function (err) {
          if (err) throw err;
          // console.log('Updated!');
        }
      );
    }
  });

  // logging all dependencies version
  const data = JSON.stringify(onlineVersion);
  await fs.appendFile(
    "./checkUpdateNpmLogs/result.json",
    date.toString(),
    function (err) {
      if (err) throw err;
      // console.log('Updated!');
    }
  );

  await fs.appendFile("./checkUpdateNpmLogs/result.json", data, function (err) {
    if (err) throw err;
  });
  processUpdating(onlineVersion);
};
