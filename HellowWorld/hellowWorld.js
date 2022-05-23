const http = require('http');

// 创建服务
const server = http.createServer((request, response) => {
  // 发送http头部
  // http状态值 200 OK
  // 内容类型 text/plain
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  // 请求响应的数据
  response.end('Hellow World')
})

server.listen(8990);

console.log('Server run at http://127.0.0.1:8990/')