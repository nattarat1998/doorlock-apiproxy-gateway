const auth = {
    token : process.env.PROXY_TOKEN || '',
    host : process.env.PROXY_HOST || 'https://api.ttlock.com',
    clientId : process.env.PROXY_CLIENTID || '',
    accessToken : process.env.PROXY_ACCESSTOKEN || ''
}

exports.authen = function(){
    return auth;
};
