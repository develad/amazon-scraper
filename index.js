const express = require('express')
const {baseURLs} = require('./config')
const {getData, filterToBuyPrice} = require('./utils')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',async (req,res)=>{
    
    const itemsScrapted = baseURLs.map(item=>getData(item.baseURL,item.buyPrice))
    const itemsInBuyPriceRange = await filterToBuyPrice(itemsScrapted)
    res.status(200).json(itemsInBuyPriceRange)
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})