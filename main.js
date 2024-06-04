import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const responce = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the amount of seconds"
});
let input = responce.userInput;
function starTime(value) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(inTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minute}:${seconds}`);
    }, 1000);
}
;
starTime(input);
