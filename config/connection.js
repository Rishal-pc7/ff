const {MongoClient} = require('mongodb')
const state={ db:null}

module.exports.connect = function (){
    return new Promise(async(resolve,reject)=>{

        const url="mongodb://64.227.142.69:27017"       
        const dbName='basically'
        const client = new MongoClient(url)
        client.connect().then((data)=>{
            if(data.error){

                console.log(data.error);
            }
            else{

                console.log('successfully connected')
                state.db=client.db(dbName)
            }
        })
    })
    
        

    
}
module.exports.get = function (){
    return state.db

}