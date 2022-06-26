const axios = require('axios').default
const cheerio = require('cheerio')
const {format} = require('date-fns')
const {reqHeaders} = require('./config')


const getData = async(baseURL,buyPrice)=>{
    const {data} = await axios.get(baseURL,reqHeaders)
    
    const $ = cheerio.load(data)

    const title = $('body').find("#title").text().trim()
    const image = $('body').find("[data-a-image-name='landingImage']").attr('src')
    const textPrice = $('body').find('.a-offscreen').first().text().trim()
    const price = $('body').find('.a-offscreen').first().text().trim().replace(/[$,]/gi,'').substring(1,8)
    const floatPrice = parseFloat(price)

    return({
        productURL: decodeURI(baseURL),
        title,
        textPrice,
        floatPrice,
        buyPrice,
        image,
        date: format(new Date(),'dd/MM/yyyy HH:mm:ss')
    })
}

const filterToBuyPrice = (itemsArr) =>{
    return Promise.allSettled(itemsArr).then(data=>{
        const items = data.map(item=>item.value)
        const filteredItemsArr = items.filter(item=> item.buyPrice > item.floatPrice ? true : false)
        return filteredItemsArr
})
}

module.exports = {
    getData,
    filterToBuyPrice
}