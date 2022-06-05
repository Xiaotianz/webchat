/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 12:48:47
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-29 14:43:51
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 12:48:47
 * @LastEditors: liutian
 * @LastEditTime: 2022-05-06 13:04:44
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
const mongoose = require('mongoose');
const moment = require('moment');
const {uuid} = require('../utils/utils');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
{
    // 邮箱号登入
    email:{  //用户邮箱
        type:String,
        required:true,
    },
    // 用户密码
    password:{  // 用户密码
        type:String,
        required:true,
        select: false,
        min:6,
        max:16,
    },
    // 用户昵称
    nickName:{ //用户昵称
        type:String,
        required:true,
    },
    // 个性签名
    signature:String,
     // 0-男 1-女
    gender:{//用户性别
        type:Number,
        default:0
    },
    // 国家
    country:String,
    // 省市
    province:String,
    // 城市
    city:String,
    // 区/县 
    district:String,
    // 头像
    avatar:String,
    createDate:String,
    updateDate:String,
},
{
    timestamps: { 
        currentTime: () => moment().format('YYYY-MM-DD HH:mm:ss'),// 使用时间方式
        createdAt: 'createDate',
        updatedAt: 'updateDate',
         // 将修改时间映射到updateDate
    },
    // 去掉_v字段
    versionKey: false
}
)


module.exports = mongoose.model('user', UserSchema);