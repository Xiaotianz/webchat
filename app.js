/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 08:59:28
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-06-05 13:41:19
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
require('dotenv-safe').config(); // 只需要引入一次
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger')
const log = require('./utils/log/logger');
const koajwt = require('koa-jwt');
const config = require('config'); // 引入config
const {err401} = require('./config/status')
// App配置
const SECRET = config.get('App-jwt.jwt'); // 直接使用 config 获取App的配置

// mongodb
const {mongooseConnect} = require('./config_mongo/mongo');
mongooseConnect();

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

// 路由前拦截auth401状态值
app.use(async (ctx,next)=>{
  return next().catch((err)=>{
    if(err.status == 401){
      ctx.body = err401;
    }else{
      throw err
    }
  })
})
// jwt
app.use(koajwt({
  secret:SECRET,
  key:'id',
}).unless({path:['/api/login','/api/register']})
)

// 路由
const routerResponse = require('./utils/routerResponse')
app.use(routerResponse())

const {router} = require('./routes/index')
app.use(router.routes(),router.allowedMethods());


// 接口文档
// const {koaSwagger} = require('koa2-swagger-ui')
// app.use(koaSwagger({
//   routePrefix: '/swagger', // host at /swagger instead of default /docs
//   swaggerOptions: {
//     url: '/swagger.json', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
//   },
// }))

// const swagger = require('./utils/swagger')
// app.use(swagger.routes(), swagger.allowedMethods())

onerror(app)
app.use(json())
app.use(log()); // 处理log的中间件
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
