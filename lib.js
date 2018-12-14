const https = require('https');

const DIJNET_URLS = {
    baseUrl: 'www.dijnet.hu',
    loginPath: '/ekonto/login/login_check_ajax',
};

exports.login = ({user, password}) => {
    return new Promise((resolve, reject) => {
        const request = https.request(
            {
                hostname: DIJNET_URLS.baseUrl,
                path: DIJNET_URLS.loginPath,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            },
            (res) => {
                console.log('login: finished');
                console.log('login: statusCode:', res.statusCode);
                console.log('login: headers:\n', res.headers);

                res.on('data', (data) => {
                    const response = JSON.parse(data.toString());
                    resolve(response);
                });
            }
        );

        request.on('error', (e) => {
            console.error('login: ERROR');
            console.error(e);
            reject(e);
        });

        request.write(`username=${user}&password=${password}`);
        request.end();
        console.log('login: request sent')
    });
};





