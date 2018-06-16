const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');



// bcrypt.genSalt(10,(err,salt)=>{
//     if(err) return next(err);
//
//     bcrypt.hash('123456', salt, (err,hash)=>{
//         if(err) return next(err);
//         console.log(hash);
//     })
// });