const db = require('./knex')();
const { v4: uuidv4 } = require('uuid');

exports.create = async function(short_name, website){

    const data = {
  
      id: uuidv4(),
      active: true,
      short_name: short_name,
      websiteTarget: website,
      active: true
  
    }
  
    await db('shortlink').insert(data);
    return data;
  
  }


  exports.get = async function(short_name) {

    const data = await db('shortlink').select('websiteTarget').where('shortlink.short_name', short_name)
    return data[0]

  }