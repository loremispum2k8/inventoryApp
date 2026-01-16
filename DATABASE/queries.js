const pool = require('./pool')

async function getCategories(){
    const {rows} = await pool.query('SELECT * FROM categories')
    return rows
}

async function getIndividualCategory(categoryId){
    const {rows} = await pool.query(`SELECT * FROM categories WHERE id = ${categoryId}`)
    return rows
}

async function addCategory(categoryName){
        const year = new Date().getFullYear() 
        let month = new Date().getMonth()+1
            month < 10 ? month = '0' + String(month) : month
        let day = new Date().getDate()
            day < 10 ? day = '0' + String(day) : day
    
        let date = `${year}-${month}-${day}`
        let hour = new Date().getHours()
            hour < 10 ? hour = '0' + String(hour) : hour
        let minutes = new Date().getMinutes()
            minutes < 10 ? minutes = '0' + String(minutes) : minutes

    let time = `${hour}:${minutes}`
    await pool.query(` INSERT INTO categories (name, cat_date, cat_time) VALUES ( $1, $2, $3)`,[categoryName,date,time])
}

async function addFile(categoryId){

}




module.exports = {
    getIndividualCategory,
    getCategories,
    addCategory
}