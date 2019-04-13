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

console.log(apiData);