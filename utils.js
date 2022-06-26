const axios = require('axios').default
const cheerio = require('cheerio')
const {format} = require('date-fns')

// fake request headers to amazon servers
const reqHeaders = {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "he,en-US;q=0.9,en;q=0.8,ru;q=0.7,fi;q=0.6,nl;q=0.5",
      "cache-control": "max-age=0",
      "device-memory": "4",
      "downlink": "4.75",
      "dpr": "1",
      "ect": "4g",
      "rtt": "50",
      "sec-ch-device-memory": "4",
      "sec-ch-dpr": "1",
      "sec-ch-viewport-width": "1680",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "viewport-width": "1680",
      "cookie": "session-id=138-3836655-2589120; session-id-time=2082787201l; i18n-prefs=USD; lc-main=he_IL; sp-cdn=\"L5Z9:IL\"; ubid-main=132-8328242-6098461; skin=noskin; session-token=mng0Itc+37tKhBASqPss9nA6aszn+hX9eH7BLWfJfOoy/KK0zTsM8Y8Dp49NUNk4F1/c95GQxJjBAG9QesYdLnLSTbU1O+9qCWci42pzODMXHeWodhVKw36N61tlxWWpj0oQ8CxuS2/XaFmrqjJPXq0u2wdLFL6WLKbc9oehRtuOOEkQM/LuDzBPQnnVZoBRVRNCjU6NPkrCA+IyFrNYHA==; csm-hit=6GBYBRD878BHS4TDHKEF+s-94XX96EAZQV86NDA0BP8|1656106638469",
      "Referer": "https://www.amazon.com/s?k=mcbooks&sprefix=mcbo%2Caps%2C181&ref=nb_sb_ss_ts-doa-p_1_4",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }

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

const allitems = async(itemsArr) =>{
    return Promise.allSettled(itemsArr).then(data=>{
        const items = data.map(item=>item.value)
        return items
    })
}
const filterToBuyPrice = (itemsArr) =>{
    const filteredItemsArr = itemsArr.filter(item=> item.buyPrice > item.floatPrice ? true : false)
    return filteredItemsArr
}

const scarpeData = async (baseURLs) =>{
    return await allitems(baseURLs.map(item=>getData(item.baseURL,item.buyPrice)))
} 

module.exports = {
    scarpeData,
    filterToBuyPrice
}