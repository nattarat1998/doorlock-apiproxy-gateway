const axios = require('axios'),
      { resolve } = require('path'),
      auth = require('./users.secret');
const { URLSearchParams } = require('url');
const Auth = auth.authen();
const Ttlock = class {
// Set Params
    getToken() { return Auth.token;}
    getHost() { return Auth.host;}
    getClientId() { return Auth.clientId;}
    getAccessToken() { return Auth.accessToken;}
// TTLock APIs
    //  Gateway APIs
    lock(thingid){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/lock`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', thingid);
                params.append('date', Date.now());

                let result = await axios.post(
                    url, 
                    params, { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );
                console.log(result);
                if (result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);
            }
        });
    }

    unlock(thingid){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/unlock`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', thingid);
                params.append('date', Date.now());

                let result = await axios.post(
                    url, 
                    params, { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );
                if (result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);
            }
        });
    }

    getState(thingid){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/queryOpenState`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', thingid);
                params.append('date', Date.now());

                let result = await axios.post(
                    url, 
                    params, { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );
                console.log(result);
                if (result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data}); 
                else resolve({ success: false, result: result});
                
            } catch (err){
                reject(err);
            }
        });
    }

    getGatewayList(){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/gateway/list`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('pageNo', 1);
                params.append('pageSize', 20);
                params.append('date', Date.now());

                let result = await axios.post(
                    url, 
                    params, { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );
                if (result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result});
                else resolve({ success: false, result: result});
            } catch (err){
                reject(err);
            }
        });
    }
    
    freezeLock(thingid){
        return new Promise(async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/freeze`;
                let params = new URLSearchParams();
                
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', thingid);
                params.append('date', Date.now());
        
                let result = await axios.post(
                    url, 
                    params, {
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );   
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result}); 
            } catch (err) {
                reject(err);
            }
        });
    }

    unfreezeLock(thingid){
        return new Promise(async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/unfreeze`;
                let params = new URLSearchParams();
                
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', thingid);
                params.append('date', Date.now());
        
                let result = await axios.post(
                    url, 
                    params, {
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );   
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result}); 
            } catch (err) {
                reject(err);
            }
        });
    }

    // Lock APIs
    getAllLock(){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/list`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('pageNo', 1);
                params.append('pageSize', 20);
                params.append('date', Date.now());

                let result = await axios.post(
                    url, 
                    params, { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );
                if (result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});
                else resolve({ success: false, result: result});
                //console.log(result.data);
                
            } catch (err){
                reject(err);
            }
        });
    }

    getLock(){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/detail`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params,{ 
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch (err) {
                reject(err);
            }
        });
    }

    addLock(){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/initialize`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockData', null);
                params.append('date', Date.now());

                let result = await axios.post(url, 
                    params, {
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                  );   
                  if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                  else resolve({ success: false, result: result}); 
            } catch (err) {
                reject(err);
            }
        });
    }

    updateLockData() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/updateLockData`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', ctx.lockId);
                params.append('lockData', ctx.lockData);
                params.append('date', Date.now());

                let result = await axios.post(
                    url, 
                    params,{
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                  else resolve({ success: false, result: result});
            } catch (err) {
                reject(err);
            }
        });
    }

    deleteLock(){
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/delete`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('date', Date.now());
                
                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch (err) {
                reject(err);
            }
        });
    }

    // Unlock record APIs
    getUnlockRecordByLock() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lockRecord/list`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('pageNo', 1);
                params.append('pageSize', 20);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch (err) {
                reject(err);
            }
        });
    }

    getAllPasscodeByLock() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/lock/listKeyboardPwd`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('pageNo', 1);
                params.append('pageSize', 20);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch (err) {
                reject(err);
            }
        });
    }

    // Passcode APIs
    addPasscodeOfLock() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/keyboardPwd/add`
                let params = new URLSearchParams();
                params.append('clientId', this.clientId);
                params.append('accessToken', this.accessToken);
                params.append('lockId', ctx.lockId);
                params.append('keyboardPwd', ctx.passcode);
                params.append('keyboardPwdName', ctx.passcodeName);
                params.append('startDate', ctx.startDate);
                params.append('endDate', ctx.endDate);
                params.append('addType', 2);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch (err) {
                reject(err);
            }
        });
    }

    changePasscodeOfLock() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/keyboardPwd/change`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('keyboardPwdId', ctx.keyboardPwdId);
                params.append('newKeyboardPwd', ctx.newKeyboardPwd);
                params.append('date', Date.now());
                
                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);
            }
        });
    }

    getPasscodeOfLock() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/keyboardPwd/get`;
                let params = new URLSearchParams();
                params.append('clientId', this.clientId);
                params.append('accessToken', this.accessToken);
                params.append('lockId', ctx.lockId);
                params.append('keyboardPwdVersion', 4);
                params.append('keyboardPwdType', ctx.keyboardPwdType);
                params.append('keyboardPwdName', ctx.keyboardPwdName);
                if(ctx.hasOwnProperty('startDate') && ctx.hasOwnProperty('endDate') ){
                    params.append('startDate', ctx.startDate);
                    params.append('endDate', ctx.endDate);
                }
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);
            }
        });
    }

    deletePasscodeOfLock() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/keyboardPwd/delete`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('keyboardPwdId', ctx.keyboardPwdId);
                params.append('date', Date.now());
                
                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);
            }
        });
    }

    //Ekey APIs
    sendEkey() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/send`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('receiverUsername', ctx.receiverUsername);
                params.append('keyName', ctx.keyName);
                params.append('startDate', ctx.startDate);
                params.append('endDate', ctx.endDate);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err){
                reject(err);
            }
        });
    }

    getEkeyList() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/list`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('pageNo', 1);
                params.append('pageSize', 20);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);            
            }
        });
    }

    getEkey() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/get`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('lockId', 2748222);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err){
                reject(err);
            }
        });
    }

    deleteEkey() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/delete`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('keyId', ctx.keyId);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err){
                reject(err);
            }
        });
    }

    freezeEkey() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/freeze`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('keyId', ctx.keyId);
                params.append('date', Date.now());

                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);
            }
        });
    }

    unfreezeEkey() {
        return new Promise( async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/unfreeze`;
                let params = new URLSearchParams();
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('keyId', ctx.keyId);
                params.append('date', Date.now());
                
                let result = await axios.post(
                    url,
                    params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result});
            } catch(err) {
                reject(err);
            }
        });
    }

    changeValidTimeOfEkey(){
        return new Promise(async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/changePeriod`;
                let params = new URLSearchParams();
                
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('keyId', ctx.keyId);
                params.append('startDate', ctx.startDate);
                params.append('endDate', ctx.endDate);
                params.append('date', Date.now());
        
                let result = await axios.post(
                    url, 
                    params, {
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );  
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result}); 
            } catch (err) {
                reject(err);
            }
        });
    }

    grantAdminRightToEkey(){
        return new Promise(async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/authorize`;
                let params = new URLSearchParams();
                
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('keyId', ctx.keyId);
                params.append('lockId', 2748222);
                params.append('date', Date.now());
        
                let result = await axios.post(
                    url, 
                    params, {
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    }
                );   
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result}); 
            } catch (err) {
                reject(err);
            }
        });
    }

    cancelAdminRightToEkey(){
        return new Promise(async (resolve, reject) => {
            try {
                let url = `${Auth.host}/v3/key/unauthorize`;
                let params = new URLSearchParams();
                
                params.append('clientId', Auth.clientId);
                params.append('accessToken', Auth.accessToken);
                params.append('keyId', ctx.keyId);
                params.append('lockId', 2748222);
                params.append('date', Date.now());
        
                let result = await axios.post(
                    url, 
                    params, {
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                    }
                );   
                if(result.status === 200 && result.statusText === 'OK') resolve({ success: true, result: result.data});    
                else resolve({ success: false, result: result}); 
            } catch (err) {
                reject(err);
            }
        });
    }

    
};


module.exports = Ttlock;