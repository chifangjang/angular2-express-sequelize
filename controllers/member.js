
let models = require("../models");
exports.addMember =( req,res)=>{

    let name = req.body.name ;
    let password = req.body.password ;

    models.Member.build({
        name: name,
        password : password })
    .save()
    .then(( result )=>{
        console.log("result :"+JSON.stringify(result));
        //  console.log( Member.dataVales) ;
        //  res.send('Hello World!');
        //  res.sendFile('index.html');
        res.send({ 'result':true }  );
   });
}