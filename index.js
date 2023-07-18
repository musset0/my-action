const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const cl_process = require("child_process");

try {
    
    console.log("This is the v1.1.2 version.");
    console.log(__dirname);
    
    // let path = process.env["GITHUB_OUTPUT"];
    // console.log(path);

    cl_process.exec('echo `id`', (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout.toString()}`);
        console.log(`stderr: ${stderr}`);
    });
    

    
    // const files_other = fs.readdirSync('/home/musset/actions-runner/_work/_temp/_runner_file_commands');

    // files_other.forEach(element => {

    //     let path = `/home/musset/actions-runner/_work/_temp/_runner_file_commands/${element}`;
            
    //     cl_process.exec(`cat ${path}`, (err, stdout, stderr) => {
    //         if (err){
    //             console.log(err);
    //             return;
    //         }

    //         let content = stdout.toString();
    //         if (content.indexOf("time") != -1 || content.indexOf("world") != -1 || content.indexOf("223333") != -1){
                
    //             console.log(`-----${element}------`);

    //             cl_process.exec(`echo "time=hi" > ${path}`, (err, stdout, stderr) => {
    //                 if (err){
    //                     console.log(err);
    //                     return;
    //                 }
    //                 console.log(`stdout: ${stdout.toString()}`);
    //                 console.log(`stderr: ${stderr}`);
    //             });

    //             console.log(`stdout: ${stdout.toString()}`);
    //             console.log(`stderr: ${stderr}`);
    //         }

            
    //     });
    // });

    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Say Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);


} catch (error) {
    core.setFailed(error.message);
}