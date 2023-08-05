/*
绝对路径可靠性强 在项目中运用较多
形式：
    http://xxxx.com/web       直接向目标资源发送请求容易理解 网站的外链会用到此形式
    //xxx.com/web             与页面的URL协议拼接 形成完整的URL再发送请求 大型网站用的较多
    /web                      与页面的协议、主机名、端口拼接 形成完整的URL再发送请求 多用于中小型网站

相对路径在发送请求时，需要与当前页面URL路径进行计算。得到完整URL后，再次发送请求。学习阶段用的比较多
例如:  http://www.xxx.com/course/h5.html
形式：
    ./css/app.css    当前文件夹下的资源    ./ 表示当前层级(当前文件夹)
    js/app.js        当前文件夹下的资源
    ../img/logo.png                      ../ 表示上级目录
    ../../mp4/show.mp4


网页中使用URL的场景
    a 标签 href
    link 标签 href
    script 标签 src
    img 标签 src
    video audio 标签 src
    form 中的 action
    AJAX 请求中的 URL
*/