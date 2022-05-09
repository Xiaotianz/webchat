
// 私聊信息数据
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const group = new Schema({
    // username:String,
    // avatar:String,
    sendId:String,
    receiveId:String,
    msg:{
        type:String,
        default:"",
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})