const express = require('express')
const {baseURLs} = require('./config')
const {getData} = require('./utils')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    
    const arr = baseURLs.map(item=>getData(item.baseURL))

    Promise.allSettled(arr).then(data=>{
        res.status(200).json(data.map(item=>item.value))
    })
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})