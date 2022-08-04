/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-10 09:09:36
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 18:14:01
 * @Description: 
 * 
 */
let state = {
    err403:{
        code:403,
        msg:"邮箱重复",
    },
    err500:{
        code:500,
        msg:'系统错误',
    },
    err401:{
        code:401,
        msg:"请求未授权"
    },
    err201:{
        code:201,
        msg:"账号或密码错误"
    },
    Email200:{
        code:200,
        msg:"验证码发送成功"
    },
    Email500:{
        code:500,
        msg:"验证码发送失败"
    },
    EmailVerFail403:{
        code:403,
        msg:'邮箱账号或验证码不一致'
    }
}

module.exports = state