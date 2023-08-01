import * as readline from 'readline';
/**
 * Function to initiate input process
 * @param {*} elem
 * @returns
 */
export const askingForUpdate = async (elem) => {
  try {
    let t;
    const cli = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const response = await new Promise((resolve) => {
      cli.question(
        `Does program proceed to updating for : ${elem.nom_module} from ${elem.currentVersion} to ${elem.onlineVersion} ? (y/n) `,
        (response) => {
          cli.close();
          resolve(response);
        },
      );
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
