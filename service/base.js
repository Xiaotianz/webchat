/*
 * @Author: @By.Xiaotian
 * @Date: 2022-05-06 13:02:46
 * @LastEditors: Xiaotian
 * @LastEditTime: 2022-05-09 16:52:25
 * @Description: 
 * 
 */
class Service {
    constructor(model) {
        this.model = model
    }
    // 创建
    create(data) {
        // console.log(this.model(data).save());
        return this.model(data).save()
    }
    // 更新
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
        return new Promise((resolve,reject)=>{
            this.model.find({},(err,res)=>{
                if(err)reject(err);
                resolve(res);
            })
        })
    }
    // id查询
    findById(id){
        return new Promise((resolve,reject)=>{
            this.model.findById(id,(err,res)=>{
                if(err)reject(err);
                resolve(res);
            })
        })
    }
    // id删除
    delete(id){
        return new Promise((resolve,reject)=>{
            this.model.findByIdAndDelete(id,err)
        })
    }
}

module.exports = Service;