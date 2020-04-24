const Logger = require('./logger')

var logger = new Logger()

class store {
     constructor(name, inventory = []){
         this.name = name,
         this.inventory = inventory
         logger.log(`New store : ${name} has ${inventory.length} items in stock`)

     }
}

module.exports = store