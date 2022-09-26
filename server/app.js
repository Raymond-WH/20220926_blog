// 启动一个web服务
const express = require('express')
const router = require('./routers')

const app = express()
// 挂载路由
app.use('/api',router)
app.listen(3001, () => {
  console.log('running at http://localhost:3001')
})