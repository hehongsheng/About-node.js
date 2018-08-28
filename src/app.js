const express=require('express')
const path=require('path')
const app=express()

const accountRouter=require(path.join(__dirname,'./routers/accountRouter.js'))

app.use('/account',accountRouter)

app.listen(1111,'127.0.0.1',err=>{
    if(err){
        console.log(error)
    }
    console.log('start ok')
})