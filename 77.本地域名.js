/*
    本地域名：只能在本机使用的域名，一般在开发阶段使用

    在地址栏输入域名后，浏览器会先进行 DNS (Domain Name System) 查询，获取该域名对应的ip地址
    请求会发送到 DNS 服务器，可以根据域名返回ip地址
    可以通过 ipconfig /all 查看本机的DNS服务器
    hosts文件也可以设置域名与ip的映射关系，在发送请求前，可以通过该文件获取域名的ip地址

*/