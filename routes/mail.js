var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');


var account = 'cls.kmtree@gmail.com';
var password = "vic017.cv05g"

//宣告發信物件
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: account,
        pass: password
    }
});


router.post('/send', function(req, res, next){
    console.log('hihi');
    var options = {
        //寄件者
        from: account,
        //收件者
        to: account,
        //主旨
        subject: '[UIUX]' + '['+req.body.name+']'+'['+req.body.frommail+']'+ req.body.subject, // Subject line
        //純文字
        text: req.body.content
    };

    //發送信件方法
    transporter.sendMail(options, function(error, info){
        if(error){
        	res.json(error);
        }else{
            res.json({"result":info.response, "CODE":"SUCCESS"});
        }
    });


});

module.exports = router;