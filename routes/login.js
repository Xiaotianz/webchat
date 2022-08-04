/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-31 10:44:08
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 18:31:56
 * @Description: 
 * 
 */
const Router = require('koa-router');
const router = new Router();
const general = require('../controller/basis/generalController');

router.prefix('/basis'); // 设置路由前缀

router.post('/login',general.login);
router.post('/register',general.create)


module.exports = router;