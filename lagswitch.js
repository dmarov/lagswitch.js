const ssfDir = "C:\\Users\\{{YourUsernameHere}}\\bin\\ssf-win-x86_64-3.0.0";
const configFilePath = "C:\\Users\\{{YourUsernameHere}}\\.config\\dbd-port-scanner\\config.json"

const { spawn } = require('child_process');
const fs = require('fs');

const configStr = fs.readFileSync(configFilePath);
const config = JSON.parse(configStr);
const endpoint = config.endpoint;

if (endpoint) {

    process.chdir(ssfDir);
    const cmd = spawn(`${ssfDir}\\ssf.exe`, ["-V", `${endpoint}:127.0.0.1:10001`, "-p", "10003", "127.0.0.1"]);

    cmd.on('error', error => {

        console.log(error);
    });

    setTimeout(() => {
        cmd.kill('SIGINT');
    }, 10000);
}
