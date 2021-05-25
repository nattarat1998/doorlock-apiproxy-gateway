const express = require('express');
const router = express.Router();
const Ttlock = require('../lib/ttlock');
const ttlock = new Ttlock();
const axios = require('axios');
//const smartaccess = require('../lib/smartaccess');
router.get('/', function(req, res, next){
    res.render('index');
});


//Control TTLock via Gateway

router.post('/getstate', async (req, res) => {
    let thingid = await req.body.deviceid;
    const promise = await ttlock.getState(thingid);
    promise.then((results) => {
        if (results.state === 0) res.json({ state: `Thing ID : ${thingid} State : Locked`});
        else if (results.state === 1) res.json({ state: `Thing ID : ${thingid} State : Unlocked`});
        else if (results.state === 2) res.json({ state: `Unknown state of thing id : ${thingid}`});
        else res.json({state: "cannot check state of lock"})
    });
});

// lock/unlock : variable named "deviceid" is sent from botHR via HTTP Request. thingid was defined and assigned as deviceid 

router.post('/state', async (req, res) => {  
    let thingid =  await req.body.deviceid;
    let state = await req.body.state;
    if (state === 'lock') {
        const promise = ttlock.lock(thingid);
        promise.then((results) => {
            if (results.success === true) res.json({ message: `The doorlock id ${thingid} is locked completely.` });
            else if (results.success === false) res.json({ message: "lock failed,please try again."});
        }).catch(() => res.send('lock failed,something went wrong!'));
    }
    else if (state === 'unlock') {
        const promise = ttlock.unlock(thingid);
        promise.then((results) => {
            if (results.success === true) res.json({ message: `The doorlock id ${thingid} is unlocked completely.` });
            else if (results.success === false) res.json({ message: "unlock failed,please try again."});
        }).catch(() => res.send('unlock failed,something went wrong!'));
    }
});

router.post('/freeze', async (req, res) => {
    let thingid = await req.body.deviceid;
    const promise = await ttlock.freezeLock(thingid);
    promise.then((results) => {
        if (results.success === true) res.json({ message: `The doorlock id ${thingid} is freezed completely.`});
        else if (results.success === false) res.json({ message: `failed to freeze the lock id ${thingid},please try again.`})
    }).catch(() => res.json({ message: "Request ERROR"}))
});

router.post('/unfreeze', async (req, res) => {
    let thingid = await req.body.deviceid;
    const promise = await ttlock.unfreezeLock(thingid);
    promise.then((results) => {
        if (results.success === true) res.json({ message: `The doorlock id ${thingid} is unfreezed completely.`});
        else if (results.success === false) res.json({ message: `failed to unfreeze the lock id ${thingid},please try again.`})
    }).catch(() => res.json({ message: "Request ERROR"}))
});

router.post('/thinginfo', (req, res) => {
    var data = JSON.stringify({"id":"20c27532-bce9-4528-b2ea-b1a55463200f"});
    var config = {
    method: 'post',
    url: 'https://thing-api.nexpie.io/thing/info',
    headers: { 
        'postman-token': '7c7e60ab-3098-1f56-53dc-57b5913220d6', 
        'Cache-Control': 'no-cache', 
        'authorization': 'Bearer c21hcnRhY2Nlc3M=', 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
    res.send(error);
    });
});
//Lock APIs
// router.post('/getlistlock',  (req, res) => {
//     const promise = ttlock.getAllLock();
//     promise.then((results) => {
//         res.json(results.result.list[0]);
//     });
// });

// router.post('/getLock', (req, res) => {
//     const promise = ttlock.getLock();
//     promise.then((results) => {
//         res.json(results.result);
//     }).catch((err) => res.json(err));
// });

// router.post('/deleteLock', (req, res) => {
//     const promise = ttlock.deleteLock();
//     promise.then((results) => {
//         res.send(`LockId was deleted`);
//     });
// });

// router.post('/unlockrecord', (req, res) => {
//     const promise = ttlock.getUnlockRecordByLock();
//     promise.then((results) => {
//         res.json(results);
//     });
// });

// router.post('/passcode/list', (req, res) => {
//     const promise = ttlock.getAllPasscodeByLock();
//     promise.then((results) => {
//         res.json(results);
//         console.log(results);
//     })
// });

// router.post('/passcode/add', (req, res) => {
//     const promise = ttlock.addPasscodeOfLock();
//     promise.then((results) => {
//         console.log(results);
//     });
// });

// router.post('/passcode/change', (req, res) => {
//     const promise = ttlock.changePasscodeOfLock();
//     promise.then((results) => {
//         console.log(results);
//     });
// });

// router.post('/passcode/get', (req, res) => {
//     const promise = ttlock.getPasscodeOfLock();
//     promise.then((results) => {
//         res.json(results);
//     });
// });

// router.post('/passcode/delete', (req, res) => {
//     const promise = ttlock.deletePasscodeOfLock();
//     promise.then((results) => {
//         res.json(results);
//     });
// });

module.exports = router;

