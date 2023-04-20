#!/usr/bin/env node

const {execSync} = require('child_process')

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio:'inherit'});
    } catch (error) {
        console.error(`Failed to execute ${command}`, e);
        return false
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ian-vassallo-academlo/second-basic-starter.git ${repoName}`;
// const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

// console.log(`Installing dependencies for ${repoName}`);
// const installedDeps = runCommand(installDepsCommand);
// if(!installedDeps) process.exit(-1);

console.log(`Congrulations! You are ready`);
console.log(`Read the readme.md to start!`)
