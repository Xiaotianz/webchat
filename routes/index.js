/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 08:59:28
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-31 10:52:10
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */

const Router = require('koa-router');
const config = require('config'); // 引入config
const router = new Router();
const login = require('./login');
const user = require('./user');
router.prefix(config.get('Router.apiPrefix'));

router.use(user.routes());
router.use(login.routes());

module.exports = {
    router
}
