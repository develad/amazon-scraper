const express = require('express')
const {baseURLs} = require('./config')
const {scarpeData,filterToBuyPrice} = require('./utils')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/allitems', async(req,res)=>{
    
    const allItemsScrapted =  await scarpeData(baseURLs)
    res.status(200).json(allItemsScrapted)
})
app.get('/buyitems',async (req,res)=>{
    
    const allItemsScrapted = await scarpeData(baseURLs)
    const itemsInBuyPriceRange = filterToBuyPrice(allItemsScrapted)
    res.status(200).json(itemsInBuyPriceRange)
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})