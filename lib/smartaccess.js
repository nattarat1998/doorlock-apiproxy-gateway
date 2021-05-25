const axios = require('axios')
const jwt = require('jsonwebtoken')
const host = 'https://api-smartaccess.nexpie.io'

const smartaccess = class {
    addMember() {
        return new Promise (async (resolve, reject) => {
            try {
                let url = host;
                let params = new URLSearchParams();
                let result = await axios.post(url,params,{
                    headers: {
                        
                    }
                })
            } catch{

            }
        })
    }
}
