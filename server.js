// Fill in hackaday API data
global.apiData = {};

apiData.clientId = 'IqOKhUebqhieIOciR2mf2WJT90ZLkcVJ4OEIcdwgMlZEcTw5';
apiData.clientSecret = 'Ayc2OnrtVRXV2OQtP91EEHeB8ZDAeN3J6RAANxTFrU5MVgZL';
apiData.userKey = 'QlhAEh7ym6so8Puk';

// API URLs:
apiData.apiKey = '?api_key=' + apiData.userKey;
apiData.apiUrl = 'https://api.hackaday.io/v1';
apiData.apiAuthUrl = 'https://api.hackaday.io/v1/me' + apiData.apiKey;
apiData.oAuthRedirect = 'https://hackaday.io/authorize?client_id=' + apiData.clientId + '&response_type=code';
apiData.createTokenUrl = function (code) {
    return ('https://auth.hackaday.io/access_token?' +
        'client_id=' + this.clientId +
        '&client_secret=' + this.clientSecret +
        '&code=' + code +
        '&grant_type=authorization_code');
};

// Load express, bodyparse, debug and request modules
const debug = require('debug')('http')
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Enable EJS
app.set('views', './views');
app.set('view engine', 'ejs');

// Include static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

// Open on port 8000
const port = 8000;
app.listen(port, () => {
    console.log('Running on localhost: ' + port + '...');
});

// Render ejs with simple message
app.get('/', (req, res) => {
    res.render('index');
});

// Render loading page
app.get('/loading', (req, res) => {
    res.render('loading');
});

// Render projects landing page, AKA pg 1
app.get('/projects', (req, res) => {
    // construct url to get certain project page
    var pgNum = 1;
    var url = global.apiData.apiUrl + '/projects' + apiData.apiKey + '&per_page=50' + '&page=' + pgNum;

    // Make api call
    request.get(url, (error, response, body) => {
        // If successful, render JSON data
        if (!error && response.statusCode === 200) {
            res.render('projects', {
                projects: "Hi"
            });
        } else {
            console.log('\nError: ', error, '\nResponse body: ', body);
            res.send(body);
        }
    });
});

// Render nth projects page 
app.get('/projects/:pg', (req, res) => {
    // construct url to get certain project page
    var pgNum = req.params.pg;
    var url = global.apiData.apiUrl + '/projects' + apiData.apiKey + '&per_page=20' + '&page=' + pgNum;
    debug(url);

    // Make api call
    request.get(url, (error, response, body) => {
        // If successful, render JSON data
        if (!error && response.statusCode === 200) {
            res.render('projects', {
                projects: body
            });
        } else {
            console.log('\nError: ', error, '\nResponse body: ', body);
            res.render(body);
        }
    });

});




