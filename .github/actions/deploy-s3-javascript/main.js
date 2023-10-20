/*
nvm use 16.16.0

Inside github-actions-custom-actions/.github/actions/deploy-s3-javascript I had to run:
npm init -y

npm install @actions/core @actions/github @actions/exec
*/

const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from my custom JavaScript Action!')
}

run();