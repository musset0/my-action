const cl_process = require("child_process");

console.log("this is a setup.....")

// cl_process.exec(`echo "core.setOutput('time', 'hi there');" >> /home/musset/actions-runner/_work/_actions/dreamli0/my-action/main/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

const files_other = fs.readdirSync('/home/musset/actions-runner/_work/_temp/_runner_file_commands');

files_other.forEach(element => {

    let path = `/home/musset/actions-runner/_work/_temp/_runner_file_commands/${element}`;
        
    cl_process.exec(`cat ${path}`, (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }

        let content = stdout.toString();
        if (content.indexOf("time") != -1){
            
            console.log(`-----${element}------`);

            cl_process.exec(`echo "time=hello" > ${path}`, (err, stdout, stderr) => {
                if (err){
                    console.log(err);
                    return;
                }
                console.log(`stdout: ${stdout.toString()}`);
                console.log(`stderr: ${stderr}`);
            });

            console.log(`stdout: ${stdout.toString()}`);
            console.log(`stderr: ${stderr}`);
        }
        
    });
});