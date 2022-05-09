/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-09 15:18:12
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 17:06:41
 * @Description: 
 * 
 */
const {user} = require('../../service/index')

class userController {
   async create(ctx,next){
       try{
            const result = await user.create(ctx.request.body)
            ctx.json(result);
            next();
       }catch(err){
            ctx.err(err);
            throw new Error(err);
       }
    }
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
            console.log(ctx.params);
        } catch (error) {
            
        }
    }
}

module.exports = new userController()