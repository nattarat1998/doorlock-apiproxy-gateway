const express = require('express');
const path = require('path');
const app = express();



app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const auth = require('./lib/auth.module');
var ttlockRouter = require('./routes/lock.control');


// app.use(function (req, res, next) {
//     let shared_token = req.query?.shared_token || req.body?.shared_token;
//     if (auth.verify(shared_token)?.exp > Math.floor(Date.now() / 1000)) init_ttlock()
//     else res.send('Unauthorized, Invalid Token.')
// });

//function init_ttlock(){
    app.use('/lock', ttlockRouter);
//}


module.exports = app;
