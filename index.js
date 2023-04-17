const express = require('express')        //Is the server on which the API runs.
const app = express()                     //Calls the package to create an app variable.
const cheerio = require('cheerio')        //Scrapes the html data off of webpages.
const axios = require('axios').default    //Makes the http requests.


const PORT = 7000
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

const articles = []
const newspapers = [ 
    {
        name: 'thetimes',
        address: 'https://www.thetimes.co.uk/environment/climate-change',
    },
    {
        name: 'gardian',
        // address: 'https://www.theguardian.com/environment/climate-crisis'
    },
    {
        name: 'telegram',
        address: ''
    }
]

newspapers.forEach(element => {
    axios.get(element.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            $('a:contains("climate")', html).each(function (){
                const title = $(this).text
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url,
                    source: newspapers.name
                })
            })
        })
})


app.get('/homepage', (req, res) => { //Creating the first end point "/homepage".
    res.json("Welcome brethren")
}) 


app.get('/news',(req, res) => { 
    res.json(articles)
})
