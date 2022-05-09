/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 13:01:37
 * @LastEditors: liutian
 * @LastEditTime: 2022-05-09 09:20:23
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
const mongoose = require('mongoose');
const moment = require('moment');
// const {uuid} = require('../utils/utils');
// console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
// 定义一个模式
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: { // 标题
        type: String,
        required: true
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' }, // 作者
    content: String, // 正文
    status: { // 1 未发布 2 发布
        type: Number,
        default: 1
    },
    createDate:String,
    updateDate:String,
    summary: String, // 简介
    cover: String, // 封面
    publishDate: Date, // 发布时间
}, {
    timestamps: { 
        currentTime: () => moment().format('YYYY-MM-DD HH:mm:ss'),// 使用时间戳
        createdAt: 'createDate',
        updatedAt: 'updateDate',
         // 将修改时间映射到updateDate
    },
    versionKey: false
});

// 使用populate查询作者的信息
ArticleSchema.pre('findOne', function () {
    this.populate('author', '_id name sex avatarUrl');
});


module.exports = mongoose.model('Article', ArticleSchema);