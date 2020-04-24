var Logger = require('./logger')

var logger = new Logger()

class shopper {
    constructor(name, money = 0){
        this.name = name,
        this.money = money
        logger.log(`New shopper: ${name} has ${money} in their account` )
    }
}

module.exports = shopper