import { exec } from 'child_process';
/**
 * Handling update according user response
 * @param {*} elem
 * @returns return a Promise
 */
export const handleUpdating = (elem) => {
  return new Promise((resolve, reject) => {
    exec(`npm update ${elem.nom_module}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        reject(error);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        reject(stderr);
        return;
      }

      if (stdout) {
        console.log(`stdout:\n${stdout}`);
        resolve();
      }
    });
  });
};
