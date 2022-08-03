/**
 * 
 * 参数:email - 必传
 * 调用方式:async sendEmail(email);
 * 验证:
 * 相关信息 global.emailData;
 */
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const { Email500,Email200 } = require('../config/status');

const randomFns=(email)=> { // 生成6位随机数
    let code = ""
    for(let i= 0;i<6;i++){
        code += parseInt(Math.random()*10)
    }
    global.emailData = {
        code,
        email
    }
    return code
}

const sendEmail=(email='')=>{
    const transport = nodemailer.createTransport(smtpTransport({
        host: 'smtp.qq.com', // 服务 由于我用的163邮箱
        port: 465, // smtp端口 默认无需改动
        secure: true,
        auth: {
          user: 'lxiaotiantop@qq.com', // 用户名
          pass: 'utbppcfursztbbda' // SMTP授权码
        }
    }));
    return new Promise((resolve,reject)=>{
        if(email == ''){
            reject('调用错误,请传入电子邮箱')
        }
        transport.sendMail({
            from: 'lxiaotiantop@qq.com', // 发件邮箱
            to: email, // 收件列表
            subject: '验证你的电子邮件', // 标题
            html: `
            <p>你好！</p>
            <p>您正在注册账号</p>
            <p>你的验证码是：<strong style="color: #ff4e2a;">${randomFns(email)}</strong></p>
            <p>***该验证码5分钟内有效***</p>` // html 内容
          },(err)=>{
            if(err){
                console.log(err);
                reject(Email500);
                transport.close();
            }else{
                resolve(Email200);
                setTimeout(()=>{
                    global.emailData.code='';
                    global.emailData.email='';
                },1000*60*5)
            }
          }
        ) 
    })
}
module.exports = sendEmail;
// sendEmail('840916593@qq.com').then(res=>{
//     console.log(res);
//     console.log(emailData);
// })