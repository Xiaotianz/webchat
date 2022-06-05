/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-09 15:18:12
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-06-05 13:54:02
 * @Description: 
 * 
 */
const { user } = require('../../service/index')
const status = require('../../config/status');
const { err500 } = require('../../config/status');
class userController {
    async update(ctx,next){
        try {
            let body = ctx.request.body;
            const result = await user.update(body._id,body);
            ctx.json(result);
            next();
        } catch (error) {
            ctx.err(error);
            throw new Error(error);
        }
    }
    async delete(ctx,next){
        try {
            let {id} = ctx.params;
            
            const result = await user.delete(id);
            if(result != null && result !=undefined){
                ctx.json();
            }else{
                ctx.fail(err500);
            }
            next();
        } catch (error) {
            ctx.err();
            throw new Error(error);
        }
    }
    async find(ctx,next){
        try {
            const result = await user.findAllandQuery();
            ctx.json(result);
            next();
        } catch (error) {
            ctx.err();
            throw new Error(error);
        }
    }
}

module.exports = new userController()