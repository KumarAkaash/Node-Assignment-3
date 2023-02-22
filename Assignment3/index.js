const fs=require('fs')
const http=require('http')
let show;
fs.writeFile('index.html',`<h1> Hello World </h1>
<p> This is Akash... </p>`,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    fs.readFile('index.html',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        show=result
    })
})
const server=http.createServer((req,res)=>{
if(req.url==='/')
res.end(show)
})
server.listen(5000,()=>console.log('server started'))