/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-09 11:41:10
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 17:11:33
 * @Description: 
 * 
 */
const Router = require('koa-router');
const router = new Router();
const user = require('../controller/basis/userController')
// router.Prefix =  '/common';
router.prefix('/basis'); // 设置路由前缀
router.post('/user',user.create);
router.put('/user',user.update);
router.delete('/user/:id',user.delete);

router.get('/login',)
module.exports = router