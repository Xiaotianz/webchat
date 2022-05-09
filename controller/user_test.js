/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 13:05:09
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 13:38:35
 * @Description: 
 * 
 * Copyright (c) 2022 by liutian 840916593@qq.com, All Rights Reserved. 
 */
const { user } = require("../service/index"); // 引入service

class ArticleController {
    async create(ctx,next) {
      try {
        const newArticle = await user.create({
          title: "第一条数据",
          content: "从零开始的koa实战",
          summary: "实战"
        });
        ctx.json(newArticle);
        // ctx.body ='123';
        next();
      } catch (err) {
        ctx.err();
        throw new Error(err);
      }
    }
  }
  module.exports = new ArticleController();