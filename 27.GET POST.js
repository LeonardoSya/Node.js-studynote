/*
GET请求的场景：
    地址栏里直接输入url访问
    点击 a 连接
    link标签引入css、script标签引入js
    video与audio引入多媒体
    img标签引入图片
    form表单标签中的 method 为get(不分大小写)
    ajax中的get请求

POST请求的场景：
    form标签中的 method 为post(不分大小写)
    ajax中的post请求

GET和POST请求的区别：
    GET和POST是http协议请求的两种方式，主要有如下几个区别:
        作用： get获取数据   post提交数据
        参数位置: get带参数请求是 将参数缀到url之后，post带参数请求是 将参数放到请求体中
        安全性: post请求对比get而言[相对]更安全 因为在浏览器中参数会暴露在地址栏
        get请求大小有限制 一般为2K post请求大小无限制

*/