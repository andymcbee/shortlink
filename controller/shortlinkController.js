

exports.create = async function(req, res){
console.log("CREATE")

}  

exports.get = async function(req, res){
console.log("GET")

//fetch actual domain from db (model)

res.redirect('https://google.com/')
}

exports.close = async function(req, res){

  console.log("DELETE")

}