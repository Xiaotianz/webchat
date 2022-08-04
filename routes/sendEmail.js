const Router = require('koa-router');
const router = new Router();
const sendEmailController = require('../controller/basis/sendEmailController');

router.prefix('/basis'); // 设置路由前缀

router.get('/ver_email',sendEmailController.sendEmailCtx);


module.exports = router;