'use strict'

const bcrypt = require('bcrypt-nodejs');

function getHash(req, res){
  const password = req.params.id;
  bcrypt.hash(password, null, null, (err, hash) => {
    return res.status(200).send({
      hash
    });
  })
}


module.exports = {
  getHash
}
