const ora = require('ora');

module.exports = (name) => {
    const spinner = ora();
    return {
        name: 'Log',
        setup(build) {
            let time;

            build.onStart(() => {
                // Start progress
                spinner.text = name + '\n';
                spinner.start();

                // Print starting build time
                time = new Date();
                const message = `[${name}] Build started...`;
                spinner.info(message);
            });

            build.onEnd((result) => {
                if (result.errors.length) {
                    spinner.fail(`Build failed. ${result.errors.length} error${result.errors.length > 1 ? 's' : ''}`);
                    return;
                }

                // Print ended build time
                const remainingTime = Math.floor((new Date() - time) / 60);
                const message = `[${name}] Build ended at ${`${remainingTime} seconds`}`;
                spinner.succeed(message);
            });
        }
    };
};
