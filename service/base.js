/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 13:02:46
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-31 12:31:01
 * @Description: 
 * 
 */
class Service {
    constructor(model) {
        this.model = model
    }
    // 添加
    async create(data) {
        let findOne =  await this.model.find({email:data.email}).exec();
        if(findOne.length !=0){
           return Promise.reject('err403');
        }
        return this.model(data).save();
    }
    // 更新数据
    update(id,data){
        return this.model.findByIdAndUpdate(id,data).exec();
    }
    // 查询全部及参数查询
    findAllandQuery(data={}){
        return this.model.find(data).lean().exec();
    }
    // id查询
    findById(id){
        return this.model.findById(id).lean().exec();
    }
    // id删除
    delete(id){
        return this.model.findByIdAndDelete(id).exec();
    }
}

module.exports = Service;