const path=require('path')

//控制器中处理登陆页面给浏览器
exports.getLoginPage=(req,res)=>{
    res.sendFile(path.join(__dirname,'../statics/views/login.html'))
}
exports.getRegisterPage=(req,res)=>{
    res.sendFile(path.join(__dirname,'../statics/views/register.html'))
}