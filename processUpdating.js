import { askingForUpdate } from "./askingForUpdate.js";
import { handleUpdating } from "./handleUpdating.js";

/**
 * Fucntion asking user through CLI updating for each module
 */
export const processUpdating = async (onlineVersion) => {
  try {
    for (const elem of onlineVersion) {
      if (elem.onlineVersion != elem.currentVersion) {
        const userAnswerForUpdating = await askingForUpdate(elem);
        // console.log(elem);

        switch (userAnswerForUpdating) {
          case "y":
            await handleUpdating(elem);
            console.log("🏆 updated with sucess 🏆");

            break;
          case "n":
            console.log("error during updating process");
            break;
          default:
            console.log("You must answer either y or n");
            break;
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
