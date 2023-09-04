const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const cl_process = require("child_process");

try {
    
    console.log("This is the v1.1.2 version.");
    console.log(__dirname);
    
    // let path = process.env["GITHUB_OUTPUT"];
    // console.log(path);



    

    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Say Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);


} catch (error) {
    core.setFailed(error.message);
}