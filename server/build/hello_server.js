"use strict";
// 创建一个node的http服务器
var http = require('http');
var server = http.createServer(function (request, response) {
    response.end("hello angular!!!++");
});
server.listen(8000);
