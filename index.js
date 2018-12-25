const dijnet = require('./lib');

const TAG = 'dijnet-tools';

console.log('brlx/dijnet-tools starting...');

// wrapping the whole thing into a func so that I can await inside it
(async () => {
    try {
        const credentials = dijnet.importCredentials();
        if (!credentials.user || !credentials.password) {
            console.log(TAG + ': missing credentials, see the README about how to provide them');
            process.exit(1);
        }

        console.log(TAG + ': now awaiting login');
        loginResponse = await dijnet.login(credentials);
        if (!loginResponse.success) {
            console.error(TAG + ': unsuccessful login, cause:', loginResponse.error);
            console.log(loginResponse);
            process.exit(1);
        }
    } catch (e) {
        console.error(TAG + ': unhandled error');
        console.error(e);
    }
})();
