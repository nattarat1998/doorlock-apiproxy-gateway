const auth = {
    token : process.env.PROXY_TOKEN || 'A2041591adb0b59479dff3a8dbef040a680bc929dc3224713a9d28d38dbb9d8b8313eeb9c0bfd4366911ff3d269a6811e',
    host : process.env.PROXY_HOST || 'https://api.ttlock.com',
    clientId : process.env.PROXY_CLIENTID || '13c8ae2c4f514b289749e7adc918abd9',
    accessToken : process.env.PROXY_ACCESSTOKEN || '21ef651f71620e5e6d7b2b0718f69f55'
}

exports.authen = function(){
    return auth;
};