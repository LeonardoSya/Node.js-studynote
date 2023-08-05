var express = require('express');
var router = express.Router();
const formidable = require('formidable')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// demo 查看文件上传报文 文件上传实质上也是在发送http请求报文
// 设置两个路由规则
// 显示网页(表单)
router.get('/portrait', (req, res) => {
  res.render('portrait')
})
// 处理文件上传
router.post('/portrait', (req, res) => {
  // 创建form对象
  const form = formidable({        // formidable可以完成body-parser所做的一些功能
    multiples: true,
    // 设置上传文件的保存目录 一般上传的文件我们都放到网站根目录/静态资源目录 public 里面
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields)   // fields存放的是一般字段(文件上传以外的字段)  比如 text radio checkbox select 它们提交的内容会保存在fields里面
    console.log(files)    // 保存  file文件

    // 服务器要保存该图片的访问url  拼接路径
    const url = `/images/${files.portrait.newFilename}` //  将来把这个路径保存到数据库里面  
    res.send(url)
  });
})

module.exports = router;
