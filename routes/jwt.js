
// const config = require('config'); // 引入config
// const Router = require('koa-router');
// const router = new Router();
// const jwt = require('koa-jwt');
// // const {sing} = require('json')
// const jsonwebtoken = require('jsonwebtoken');
// const secret = config.get('App-jwt.jwt');
// router.use(jwt({
//   secret,
//   debug:true,
// })).unless({ path: [/^\/api/] }) // 以 api 开头的请求地址不使用 jwt 中间件

// router.get('/auth',async (ctx,next)=>{
//   ctx.body = ctx.state.user
// })

// module.exports = {
//     router
// }