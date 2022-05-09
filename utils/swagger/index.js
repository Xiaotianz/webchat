/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 15:42:07
 * @LastEditors: liutian
 * @LastEditTime: 2022-05-06 15:54:11
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
const router = require('koa-router')() //引入路由函数
const swaggerJSDoc = require('swagger-jsdoc')
const path = require('path');
const swaggerDefinition = {
    info: {
      title: 'API',
      version: '1.0.0',
      description: 'API',
    },
    host: 'localhost:3000',
    basePath: '/' // Base path (optional)
  };
  const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, '../../routes/*.js')], // 写有注解的router的存放地址
  };

  const swaggerSpec = swaggerJSDoc(options)

  router.get('/swagger.json', async function (ctx) {
    ctx.set('Content-Type', 'application/json');
    ctx.body = swaggerSpec;
  })

  module.exports = router