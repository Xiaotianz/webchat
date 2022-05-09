/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 16:07:10
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 17:27:30
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
function routerResponse(option={}){
    return async function(ctx,next){
        try{
            ctx.json = function (data) {
                ctx.type ='json'
                ctx.body = {
                    code : option.successCode || 200,
                    msg : option.successMsg || 'success',
                    data : data
                }
            }
            ctx.fail = function(){
                ctx.type ='json'
                ctx.body = {
                    code : option.successCode || 500,
                    msg : option.successMsg || '系统错误',
                }
            }
            await next();
        }catch(err){
            ctx.err = function (msg,code) {
                    ctx.type = 'json'
                    ctx.body = {
                        code : code || option.failCode || 500,
                        msg : msg || option.successMsg || '系统错误',
                    }
            }
        }
    }
 
}
 
 
module.exports= routerResponse