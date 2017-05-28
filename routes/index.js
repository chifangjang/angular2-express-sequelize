/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();
var models = require("../models");
var bcrypt = require('bcrypt');
var member = require("../controllers/member");
var record = require("../controllers/purchaseRecord");



/* GET home page. */

router.get('/', function(req, res) {
	res.sendFile('index.html');
});

router.post( '/login' , function(req , res ){

      models.Member.findOne({
			where: { name : req.body.name }
        }).then(function( member ){ 
console.log("after parsing :"+parseInt(req.body.password));
        if( member.password==parseInt(req.body.password)  ){
          res.send( {'result':true} );
        }else{
          res.send( {'result':false} );
        }

console.log('this is express query from db: '+ member.password);
console.log('this is express from request : '+ JSON.stringify(req.body, null, 2));
console.log(' password is : '+req.body.password); 
          //  res.sendFile('index.html');
        });
})

router.get('/create', function(req, res) {
  models.Member.create({
    name: 'noProbelm9999',
    password: 899898
  }).then(function() {
//    res.send('Hello World!');
   res.send({ 'result':true }  );

  });
});

router.get('/password' , function( req , res) {

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);


   if (bcrypt.compareSync("B4c0/\/", hash)) {
console.log('compare ok~~');
//      deferred.resolve(result.body);

    } else {
console.log('compare is false  ~~');
      console.log("PASSWORDS NOT MATCH");
  //    deferred.resolve(false);
    }

});


router.get('/:member_id/purchase/create', function (req, res) {

  record.purchaseRecord(req,res);
});

router.post('/addMember', function (req, res) {

  member.addMember( req,res );  
});

module.exports = router;




















