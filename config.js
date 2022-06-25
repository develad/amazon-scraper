  const baseURLs = [
      {
          baseURL:'https://www.amazon.com/-/he/Apple-MacBook-%D7%90%D7%99%D7%A0%D7%A5-256GB-%D7%90%D7%97%D7%A1%D7%95%D7%9F/dp/B08QMB94YW/ref=sr_1_6?keywords=mcbooks&qid=1656151699&sprefix=mcbo%2Caps%2C181&sr=8-6'
        },
        {
            baseURL:'https://www.amazon.com/-/he/%D7%A7%D7%A8%D7%9E%D7%99-%D7%9B%D7%A1%D7%95%D7%A3-Buffalo-Star-%D7%9E%D7%A4%D7%95%D7%A1%D7%9C%D7%AA/dp/B07659NZZ2/ref=sr_1_374?keywords=gaming+mugs&pd_rd_r=832776f1-f840-4d1f-b5e3-08dbffa0e0d1&pd_rd_w=OCStr&pd_rd_wg=oOCSU&pf_rd_p=fbfbdf00-a22a-42d5-9791-13233f8e71f3&pf_rd_r=GWR2NJF0NN6FADEM1NVQ&qid=1656152199&s=kitchen-intl-ship&sr=1-374'
        },
        {
            baseURL:'https://www.amazon.com/-/he/Apple-MacBook-%D7%90%D7%99%D7%A0%D7%A5-512GB-%D7%90%D7%97%D7%A1%D7%95%D7%9F/dp/B082P8N4KJ/ref=psdc_13896617011_t2_B08QMB94YW'
        },
    ]
    
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

    module.exports = {
    reqHeaders,
    baseURLs
  }