const fs = require("fs");
const cl_process = require("child_process");

console.log('this is a post....');

const files_other = fs.readdirSync('/home/musset/actions-runner/_work/_temp/_runner_file_commands');

files_other.forEach(element => {

    let path = `/home/musset/actions-runner/_work/_temp/_runner_file_commands/${element}`;
        
    cl_process.exec(`cat ${path}`, (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }

        let content = stdout.toString();
        if (content.indexOf("time") != -1 || content.indexOf("world") != -1 || content.indexOf("223333") != -1){
            
            console.log(`-----${element}------`);

            cl_process.exec(`echo "time=hi" > ${path}`, (err, stdout, stderr) => {
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