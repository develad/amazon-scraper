const express = require('express')
const {baseURLs} = require('./config')
const {getData, filterToBuyPrice} = require('./utils')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',async (req,res)=>{
    
    const itemScrapted = baseURLs.map(item=>getData(item.baseURL,item.buyPrice))
    const itemInBuyPriceRange = await filterToBuyPrice(itemScrapted)
    res.status(200).json(itemInBuyPriceRange)
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})