/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-29 13:51:38
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 20:20:25
 * @Description: 
 * 
 */
const { CryptoPassword }  = require('../../utils/crypto')
const status = require('../../config/status')
const {user} = require('../../service/index');
const sign = require('../../utils/jwt')
const { err500,err201, EmailVerFail403 } = require('../../config/status');
class generalController {
    async login(ctx,next){
        try {
            let {email, password} = ctx.request.body;
            let login = {
                email,
                password:CryptoPassword(password),
            }
            let result =  await user.findAllandQuery(login);
            if(result.length == 0){
                ctx.fail(err201);
                return false;
            }
            let token = await sign(result[0]._id);
            ctx.json(Object.assign(result[0],{token}))
            next()
        } catch (error) { 
            console.log(error);
            ctx.fail(err500)
            next()
        }
    }
    async create(ctx,next){
        try{
             let {password,email,verCode} = ctx.request.body;
             console.log(ctx.request.body);
             let emailData = global.emailData
             if(emailData !=undefined){
                if(emailData.email == email && emailData.code == verCode){
                    ctx.request.body.password = CryptoPassword(password);
                    await user.create(ctx.request.body)
                    ctx.json();
                }else{
                    ctx.fail(EmailVerFail403);
                }
             }else{
                ctx.fail(EmailVerFail403);
             }
             next();
        }catch(err){
             ctx.fail(status[err]);
             next();
        }
    }
}


module.exports = new generalController()
