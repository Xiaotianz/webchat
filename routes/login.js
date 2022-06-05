/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-31 10:44:08
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-31 11:56:43
 * @Description: 
 * 
 */
const Router = require('koa-router');
const router = new Router();
const general = require('../controller/basis/generalController');


router.post('/login',general.login);
router.post('/register',general.create)


module.exports = router;