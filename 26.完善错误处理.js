/*
常见错误代码 err.code
Common system errors
This is a list of system errors commonly-encountered when writing a Node.js program. For a comprehensive list, see the errno(3) man page.

EACCES (Permission denied): An attempt was made to access a file in a way forbidden by its file access permissions.

EADDRINUSE (Address already in use): An attempt to bind a server (net, http, or https) to a local address failed due to another server on the local system already occupying that address.

ECONNREFUSED (Connection refused): No connection could be made because the target machine actively refused it. This usually results from trying to connect to a service that is inactive on the foreign host.

ECONNRESET (Connection reset by peer): A connection was forcibly closed by a peer. This normally results from a loss of the connection on the remote socket due to a timeout or reboot. Commonly encountered via the http and net modules.

EEXIST (File exists): An existing file was the target of an operation that required that the target not exist.

EISDIR (Is a directory): An operation expected a file, but the given pathname was a directory.

EMFILE (Too many open files in system): Maximum number of file descriptors allowable on the system has been reached, and requests for another descriptor cannot be fulfilled until at least one has been closed. This is encountered when opening many files at once in parallel, especially on systems (in particular, macOS) where there is a low file descriptor limit for processes. To remedy a low limit, run ulimit -n 2048 in the same shell that will run the Node.js process.

ENOENT (No such file or directory): Commonly raised by fs operations to indicate that a component of the specified pathname does not exist. No entity (file or directory) could be found by the given path.

ENOTDIR (Not a directory): A component of the given pathname existed, but was not a directory as expected. Commonly raised by fs.readdir.

ENOTEMPTY (Directory not empty): A directory with entries was the target of an operation that requires an empty directory, usually fs.unlink.

ENOTFOUND (DNS lookup failed): Indicates a DNS failure of either EAI_NODATA or EAI_NONAME. This is not a standard POSIX error.

EPERM (Operation not permitted): An attempt was made to perform an operation that requires elevated privileges.

EPIPE (Broken pipe): A write on a pipe, socket, or FIFO for which there is no process to read the data. Commonly encountered at the net and http layers, indicative that the remote side of the stream being written to has been closed.

ETIMEDOUT (Operation timed out): A connect or send request failed because the connected party did not properly respond after a period of time. Usually encountered by http or net. Often a sign that a socket.end() was not properly called.

*/

const http = require('http')
const fs = require('fs')
const path = require('path')
const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const server = http.createServer((request, response) => {

    if (request.method !== 'GET') {                            //  3. 请求方法错误 在此需求下不是GET
        response.statusCode = 405
        response.end('<h1>405 Method Not Allowed</h1>')
        return       // 这里必须写 return 否则下面的 end 也会执行 会响应错误
    }

    const { pathname } = new URL(request.url, 'http://127.0.0.1')
    let filePath = __dirname + '/19.http响应练习' + pathname
    fs.readFile(filePath, (err, data) => {

        // 完善错误处理
        if (err) {
            // 设置字符集
            response.setHeader('content-type', 'text/html;charset=utf-8')
            // 判断错误代号 
            switch (err.code) {
                case 'ENOENT':                                 // 1. 找不到该网页资源
                    response.statusCode = 404
                    response.end('<h1>404 Not Found</h1>')
                case 'EPERM':                                  // 2. 无权限访问该网页
                    response.statusCode = 403
                    response.end('<h1>403 Forbidden</h1>')
                default:
                    response.statusCode = 500
                    response.end('<h1>Internal Server Error</h1>')     // 4. 未知错误
            } 
            return      // 这里必须写 return 否则下面的 end 也会执行 会响应错误
        }
        

        const ext = path.extname(filePath).slice(1)
        const type = mimes[ext]
        if (!type) {
            type = 'application/octet-stream'
        }
        if (ext === 'html') {
            response.setHeader('content-type', type + ';charset=utf-8')
        } else {
            response.setHeader('content-type', type)
        }
        response.end(data)
    })
})
server.listen(9000, () => {
    console.log('服务已启动')
})
