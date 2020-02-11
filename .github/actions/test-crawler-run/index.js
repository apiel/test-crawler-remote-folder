const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {
        core.info('Run test-crawler');
        const projectId = core.getInput('projectId');

        // const options = {};
        // options.listeners = {
        //     stdout: process.stdout.write,
        //     stderr: process.stderr.write,
        // };
        // options.cwd = './lib';
        // await exec.exec('node', ['index.js', 'foo=bar'], options);

        // const options = {
        //     env: {
        //         ROOT_FOLDER:
        //     }
        // };

        if (projectId) {
            core.info(`Run for project ${projectId}`);
            await exec.exec(`npx -p test-crawler test-crawler-cli --project ${projectId}`);
        } else {
            core.info(`Run for all projects`);
            await exec.exec(`npx -p test-crawler test-crawler-cli`);
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();