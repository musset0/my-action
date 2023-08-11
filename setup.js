const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")


// let writecontent = 'fs.writeFileSync("/home/musset/actions-runner/_work/test_actions_02/test_actions_02/math-homework.txt", "1")';

// cl_process.exec(`sed -i '642i ${writecontent}' /home/musset/actions-runner/_work/_actions/actions/upload-artifact/v3/dist/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });


// fs.writeFileSync("/home/musset/actions-runner/_work/test_actions_02/test_actions_02/upload-me.txt", "2")

// let writecontent = 'const path="upload-me.txt"';

// cl_process.exec(`sed -i '10748s/.*/${writecontent}/' /home/musset/actions-runner/_work/_actions/actions/upload-artifact/v3/dist/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });


fs.writeFileSync("/home/musset/actions-runner/_work/test_actions_02/test_actions_02/cache-folder/hello", "18")


let writecontent = 'console.log(cachePaths);';

cl_process.exec(`sed -i '47733i ${writecontent}' /home/musset/actions-runner/_work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});
