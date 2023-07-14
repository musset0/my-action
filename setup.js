const cl_process = require("child_process");

console.log("this is a setup.....")

cl_process.exec(`rm -rf /home/musset/actions-runner/_work/_actions/dreamli0/my-action/main/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});
