const express = require('express')
const {baseURLs} = require('./config')
const {getData} = require('./utils')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    
    const arr = baseURLs.map(item=>getData(item.baseURL,item.buyPrice))

    Promise.allSettled(arr).then(data=>{
        const items = data.map(item=>item.value)
        const brr = items.filter(item=> item.buyPrice > item.floatPrice ? true : false) 
        res.status(200).json(brr)
    })
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})