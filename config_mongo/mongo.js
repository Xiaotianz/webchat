/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 12:16:32
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-08-03 22:58:56
 * @Description: mongodb连接
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
const mongoose = require('mongoose');
const config = require('config');
const dbConfig = config.get('Database');

exports.mongooseConnect = (req,res)=>{
    mongoose.connect(`mongodb://${dbConfig.user}:${dbConfig.psd}@${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}?authSource=${dbConfig.authdbName}`);
    let db = mongoose.connection;
    db.on('error',(err)=>{
        console.log('mongoose连接错误:'+err);
    })
    db.once('open',(callback)=>{
        console.log(`Mongoose连接到${dbConfig.dbName}`);
    })
}