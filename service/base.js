/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 13:02:46
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 17:21:00
 * @Description: 
 * 
 */
class Service {
    constructor(model) {
        this.model = model
    }
    // 添加
    create(data) {
        // console.log(this.model(data).save());
        return this.model(data).save()
    }
    // 更新数据
    update(id,data){
        return this.model.findByIdAndUpdate(id,data).exec();
        // return new Promise((resolve,reject)=>{
        //     this.model.findByIdAndUpdate(id,data,(err,res)=>{
        //         if(err)reject(err);
        //         resolve(res);
        //     })
        // })
    }
    // 查询全部
    findAll(){
        return this.model.find({}).exec();
    }
    // id查询
    findById(id){
        return this.model.findById(id).exec();
        // return new Promise((resolve,reject)=>{
        //     this.model.findById(id,(err,res)=>{
        //         if(err)reject(err);
        //         resolve(res);
        //     })
        // })
    }
    // id删除
    delete(id){
        return this.model.findByIdAndDelete(id).exec();
        // return new Promise((resolve,reject)=>{
        //     this.model.findByIdAndDelete(id,err)
        // })
    }
}

module.exports = Service;