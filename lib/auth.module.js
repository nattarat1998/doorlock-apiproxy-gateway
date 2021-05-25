const jwt = require('jsonwebtoken');
const SECRET = "xxx";

function verify(shared_token) {
    try {
        let { access_token } = jwt.verify(shared_token, SECRET);
        return jwt.decode(access_token);
    }
    catch (error) {
        return null;
    }
}

module.exports = {
     verify
    // checkExpiredToken
}

// function checkExpiredToken(shared_token){
//     try {
//         var activeToken;
//         if (verify(shared_token)?.exp > Math.floor(Date.now()/1000)) { return activeToken = true; }
//         else res.send('Unauthorized, Invalid Token.');
//     } catch(error){ return activeToken = false;}
// }