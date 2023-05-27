const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT||5000;
app.use(cors())

const data=require('./data/category.json');
const videos=require("./data/videos.json")

app.get("/category",(req,res)=>{
    res.send(data)
})
// app.get("/videos/:id",(req,res)=>{
//     const id=req.params.id;
//     const selectVideos=videos.find(v=>v._id===id)
//     res.send(selectVideos)
   
// })
app.get("/category/:id",(req,res)=>{
    const id=req.params.id;
    const categoryVdo=videos.filter(v=>v.id===id)
    res.send(categoryVdo)
   
})
app.get("/videos",(req,res)=>{
    res.send(videos)
   
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})