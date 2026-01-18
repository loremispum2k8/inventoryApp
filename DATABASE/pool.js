const { Pool } = require("pg");
require('dotenv').config()
module.exports = new Pool({
    connectionString: "postgresql://inventoryappdatabase_6rfj_user:i9dtxs5T7Zgms4jnEQ5uA6ZNDW2Oitir@dpg-d5l2rdpr0fns738tul30-a/inventoryappdatabase_6rfj",
    ssl:false
})