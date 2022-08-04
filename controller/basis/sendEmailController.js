/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-04 14:54:00
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 15:23:52
 * @Description: 
 * 
 */
// 发送验证码

const { Email500 } = require('../../config/status');
const sendEmail = require('../../utils/e_mail');


class sendEmailController {
    async sendEmailCtx(ctx,next){
        try {
            let { email } = ctx.request.query;
            await sendEmail(email);
            ctx.json('发送成功');
            next();
        } catch (error) {
            ctx.err(Email500);
        }
    }
}

module.exports = new sendEmailController();
