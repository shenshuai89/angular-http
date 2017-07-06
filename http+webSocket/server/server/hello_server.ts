// 创建一个node的http服务器
import * as http from 'http'

const server = http.createServer( (request,response) => {
    response.end("hello angular!!!++");
});

server.listen(8000)
