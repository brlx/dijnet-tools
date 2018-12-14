const dijnet = require('./lib');

const CREDENTIALS = {
    user: 'TODO',
    password: 'TODO',
};

console.log('dijnet-tools starting...');

// wrapping the whole thing into a func so that I can await inside it
(async () => {
    try {
        console.log('main: now awaiting login');
        loginResponse = await dijnet.login(CREDENTIALS);
        if (!loginResponse.success) {
            console.error('main: unsuccessful login, cause:', loginResponse.error);
            console.log(loginResponse);
            process.exit();
        }
    } catch (e) {
        console.error('main: unhandled error');
        console.error(e);
    }
})();
