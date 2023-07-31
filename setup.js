const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")

cl_process.exec('echo `id`', (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});

const files_other = fs.readdirSync('/home/runner/work/_actions');
files_other.forEach(element => {
    console.log('/home/runner/work/_actions/' + element);
});

// cl_process.exec('echo \'core.setOutput("time", "\\`date\\`");\' >> /home/musset/actions-runner-03/_work/_actions/dreamli0/my-action/main/index.js', (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// cl_process.exec("ps -T -p $(ps aux | grep 'run.sh' | awk '{print $2}')", (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`run.sh: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// cl_process.exec("ps -T -p $(ps aux | grep 'run-helper.sh' | awk '{print $2}')", (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`run-helper.sh: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

// cl_process.exec("ps -T -p $(ps aux | grep 'Runner.Listener' | awk '{print $2}')", (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`Runner.Listener: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

