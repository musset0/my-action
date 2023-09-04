const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")



let insertcontent = 'core.setOutput("time", "\\`date\\`");';
cl_process.exec(`sed -i '25i ${insertcontent}' /home/runner/work/_actions/dreamli0/my-action/main/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});







