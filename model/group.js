/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-09 14:30:30
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 15:11:11
 * @Description: 
 * 
 */
// 群聊信息数据  只针对当前id的数据 群聊人数的数据暂时不管 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const group = new Schema({
    username:String, //昵称
    roomid:String,  //群聊id
    avatar:String,  // 头像
    msg:{
        type:String,
        default:"",
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})