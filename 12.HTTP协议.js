// Hypertext Transfer Protocol  超文本传输协议
// 在 MDN 上查找http协议相关的文档

/*
 一、请求报文的结构：请求行、请求头、请求体

 1. 请求行  GET https://www.csdn.com/ HTTP/1.1
       (请求方法)   (URL)           (HTTP版本号)   
1.1 http常见的请求方法: GET 获取数据 | POST 新增数据 | PUT/PATCH 更新数据 | DELETE 删除数据
1.2 URL: Uniform Resource Locator 统一资源定位符    其本身是一个字符串，用来定位服务器的资源  
URL由  协议名称、主机名、    端口号、路径、 查询字符串querystring                组成
       http://search.jd.com:443/search?keyword=oneplus&psort=3   
主机名可以是域名或ip地址，主机名用来定位网络上的某台计算机
路径用来定位服务器当中的某一个资源   
端口号有些情况下可省略不写
查询字符串(querystring)是键值对结构，查询字符串用来向服务器传递额外的参数
1.3 版本号 目前有 1.0\1,1\2\3 这四种版本号 3是2018年发布的

2. 请求头  请求头由一系列键值对组成
例:
Host: www.baidu.com
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.6)         User-Agent 记录了浏览器平台及版本号
Gecko/20050225 Firefox/1.0.1
Connection: Keep-Alive                                                       这是一个浏览器的交互行为 用来保存连接通道 提高效率
Upgrade-Insecure-Requests: 1                                                 提高交互安全性
Accept: text/html, application/xhtml+xml, application/xml;q=0.9             Accept 记录了浏览器能处理的数据类型
Accept-Encoding: gzip, deflate, br                                          Accept-Encoding 记录了浏览器支持的压缩方式
    
3. 请求体
请求体内容非常灵活


二、响应报文的结构：响应行、响应头、响应体

1. 响应行     HTTP/1.1       200         OK
            (HTTP版本号) (响应状态码)   (响应状态的描述)
1.1 http常见的请求方法: GET 获取数据 | POST 新增数据 | PUT/PATCH 更新数据 | DELETE 删除数据
1.2 响应状态码: 200请求成功 403禁止请求 404找不到资源 500服务器内部错误
    状态码分类: 1xx信息响应 2xx成功响应 3xx重定向消息 4xx客户端错误响应 5xx服务端错误响应
1.3 响应状态描述: 200 OK   403 Forbidden   404 Not Found   500 Internal Server Error

2. 响应头
Server: BWS/1.1                                 记录服务器所使用的技术
Date: Tue, 20 Dec 2022 13:58:08 GMT             记录响应的时间
Content-Type: text/html;charset=utf-8           (重要)用来声明响应体内容的格式与字符集
Content-Length: 462962                          记录响应体内容的长度 单位是字节byte

3. 响应体
响应体内容格式非常灵活
常见的响应体内容格式: html, css, js, 图片, 视频, JSON

















 */