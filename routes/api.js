var express = require('express');
var router = express.Router();

// 全局变量  返回的基础数据  
var resData;

router.use(function(req,res,next){
    resData = {
        code: 0,
        status: true,
        msg: ''
    }

    next();
})

router.post('/login', function(req, res) {


    // 获取浏览器返回的数据
    var data = req.body;
    var name = data.name;
    var pwd = data.pwd;

    if(name == ''){

        resData.code = 1;
        resData.status = false;
        resData.msg = '用户名不能为空';

        res.json(resData)
        return;
    }
    if(pwd == ''){

        resData.code = 2;
        resData.status = false;
        resData.msg = '密码不能为空';

        res.json(resData)
        return;
    }
    if(name!= 'zwf' || pwd!= '123'){

        resData.code = 3;
        resData.status = false;
        resData.msg = '用户名或密码不正确';

        res.json(resData)
        return;
    }
    if(name== 'zwf' && pwd== '123'){

        resData.code = 0;
        resData.status = true;
        resData.msg = '登录成功';

        res.json(resData)
        return;
    }
});


router.get('/getData/baseInfo', function(req, res) { 

    resData.data = {
        province: '河北省',
        city: '邯郸市',
        address: '磁县'
    }

    res.json(resData)
    return;
});
module.exports = router;