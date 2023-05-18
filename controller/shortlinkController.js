const shortlink = require('../model/shortlink')
const { v4: uuidv4 } = require('uuid');



exports.create = async function(req, res){


  //console.log(process.env.OPENAI_API_KEY)



throw "Testing an error!"


//





  


  /* 
console.log("CREATE")

const data = shortlink.create("site1", "https://google.com")

res.status(200).send({data}) */

}  

exports.get = async function(req, res){
console.log("GET")

//fetch actual domain from db (model)

const data = await shortlink.get("site1")

console.log(data)


res.redirect(data.websiteTarget)
}

exports.close = async function(req, res){

  console.log("DELETE")

}