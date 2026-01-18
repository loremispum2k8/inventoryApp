const { Pool } = require("pg");
require('dotenv').config()

if(process.env.ENVIRONMENT == 'PROD'){
    module.exports = new Pool({
        connectionString: process.env.INTERNAL,
        ssl:false
    })
}else{
    module.exports = new Pool({
        connectionString: process.env.EXTERNAL,
        ssl:{rejectUnauthorized:false}
    })
}