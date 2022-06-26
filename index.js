const express = require('express')
const {baseURLs} = require('./config')
const {filterToBuyPrice,allitems,scarpeData} = require('./utils')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/allitems', async(req,res)=>{
    
    const itemsScrapted =  scarpeData(baseURLs)
    const allItemsScrapted = await allitems(itemsScrapted)
    res.status(200).json(allItemsScrapted)
})
app.get('/buyitems',async (req,res)=>{
    
    const itemsScrapted = scarpeData(baseURLs)
    const itemsInBuyPriceRange = await filterToBuyPrice(itemsScrapted)
    res.status(200).json(itemsInBuyPriceRange)
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`)
})