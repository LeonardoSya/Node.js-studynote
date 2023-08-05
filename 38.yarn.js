/*
yarn常用命令

初始化  yarn init / yarn init -y
安装包
        yarn add uniq 生产依赖
        yarn add less --dev 开发依赖
        yarn global add nodemon 全局安装
删除包  yarn remove uniq 删除项目依赖包
        yarn global remove nodemon 全局删除包
安装项目依赖    yarn  等同于 npm i 
运行命令别名    yarn <别名> # 不需要添加 run

npm和yarn的选择：

    如果是公司要根据项目代码来选择，可以通过 锁文件 判断项目的包管理工具
    npm 的锁文件为 package-lock.json
    yarn 的锁文件为 yarn.lock

包管理工具不要混用
*/