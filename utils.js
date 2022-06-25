const axios = require('axios').default
const cheerio = require('cheerio')
const {format} = require('date-fns')
const {reqHeaders} = require('./config')


const getData = async(baseURL)=>{
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
        image,
        date: format(new Date(),'dd/MM/yyyy HH:mm:ss')
    })
}

module.exports = {
    getData
}