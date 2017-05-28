
let models = require("../models");

exports.purchaseRecord = (req,res)=>{

  let title = req.params.title;
  let memberId = req.params.memberId;

  models.Purchase_Record.create({
    title: title,
    MemberId: memberId
  }).then(()=> {
    res.send('this is the good start for associate');
  });
}