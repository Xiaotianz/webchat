/*
 * @Author: @By.Xiaotian
 * @Date: 2022-08-01 22:29:27
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-04 00:17:06
 * @Description: 
 * 
 */
const jwt = require("jsonwebtoken");
// const koajwt = require("koa-jwt");
const config = require('config');

const SECRET =config.get('App-jwt.jwt');

const tokenExpiresTime = 1000 * 60 * 60 * 24 * 1   // token一天有效期


const sign = async (id)=>{
    return jwt.sign({id},SECRET,{expiresIn:tokenExpiresTime});
}

module.exports = sign;
// const 
// module.exports = jwt.



