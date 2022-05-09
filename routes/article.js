/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-09 11:41:10
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 17:34:11
 * @Description: 
 * 
 */
const Router = require('koa-router');
const router = new Router();
const user = require('../controller/basis/userController')

router.prefix('/basis'); // 设置路由前缀
// 添加
router.post('/user',user.create);
// 更新
router.put('/user',user.update);
// 通过id删除
router.delete('/user/:id',user.delete);
router.get('/user',user.find)

router.get('/login',)
module.exports = router