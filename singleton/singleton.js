var Logger = require('./logger')
var Store = require('./store')
var Shopper = require('./shopper')

var logger = new Logger()

logger.log('Starting app ..... ')

var ash = new Shopper('Ashraf', 500)
var shop_store = new Store('Hussain', [
    {
        item: 'Chal',
        qty: 5,
        price: 100
    },
    {
        item: 'Dal',
        qty: 10,
        price: 300
    },
    {
        item: 'Tel',
        qty: 20,
        price: 900
    }
])

logger.log('Finished ')


console.log(`${logger.count} logs total`)
logger.logs.map((log) => {
    console.log(`${log.message}`)
})