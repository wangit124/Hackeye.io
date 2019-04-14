// Fill in hackaday API data
var apiData = {};

apiData.clientId = 'IqOKhUebqhieIOciR2mf2WJT90ZLkcVJ4OEIcdwgMlZEcTw5';
apiData.clientSecret = 'Ayc2OnrtVRXV2OQtP91EEHeB8ZDAeN3J6RAANxTFrU5MVgZL';
apiData.userKey = 'QlhAEh7ym6so8Puk';

//API URLs:
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

// Load express, bodyparse, modules
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
app.listen(port, ()=> {
    console.log('Running on localhost: '+port+'...');
});

// Render ejs with simple message
app.get('/', (req, res) => {
    res.render('index', {
        message: JSON.stringify(apiData)
    });
});

// Test * link
app.all('*', (req, res) => {
    res.redirect('/');
});



