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
    // 1) Get some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    //github.getOctokit().rest //we can use something like this (maybe not exactly like this) to send requests to GH API
    //core.notice(`Action being executed: ${github.context.action}`);
    //core.notice('Hello from my custom JavaScript Action!')

    const webSiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com`
    core.setOutput('website-url', webSiteUrl); // equivalent to ::set-output
}

run();