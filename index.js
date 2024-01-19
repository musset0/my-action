const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const cl_process = require("child_process");

try {
    
    // console.log("This is the tag v1.1.2 version.");
    console.log('This is the branch v1.1.3')
    
    // console.log(__dirname);
    
    // let path = process.env;
    // console.log(path);

    // // var reg = /^(a*)*b$/;

    // // console.log(new Date());

    // // var result = reg.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    // // console.log(result);

    // // console.log(new Date());

    // console.log('this is the first print')
    // console.log('this is the added message')

    // const nameToGreet = core.getInput('who-to-greet');
    // console.log(`Say Hello ${nameToGreet}!`);
    // const time = (new Date()).toTimeString();
    // // core.setOutput("time", time);
    // // core.setOutput("time", "echo 'time';pwd");
    // core.setOutput("time", "a.h");


} catch (error) {
    core.setFailed(error.message);
}
