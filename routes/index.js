var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {

	// 获取地址栏里问号？ 之后的数据
    var data = req.query;

    if(data){
    	console.log()
        console.log(data)
    }

    res.render('post', { title: 'Express' });
});


// router.get('/getData/baseInfo', function(req, res) {
//     res.json({
//         status: true,
//         data: {
//             province: '河北省',
//             city: '邯郸市'
//         }
//     })
// });
module.exports = router;