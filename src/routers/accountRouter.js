const express=require('express')
const path=require('path')

const accountRouter=express.Router()//创建路由

//导入控制器
const accountCtrl=require(path.join(__dirname,'../controllers/accountController.js'))

//获取登陆页面请求
accountRouter.get('/login',accountCtrl.getLoginPage)
accountRouter.get('/register',accountCtrl.getRegisterPage)


module.exports=accountRouter//导出路由