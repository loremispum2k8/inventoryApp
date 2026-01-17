const pool = require('./pool')

async function getCategories(){
    const {rows} = await pool.query('SELECT * FROM categories')
    return rows
}

async function getIndividualCategory(categoryId){
    const {rows} = await pool.query(`SELECT * FROM categories WHERE id = $1`,[categoryId])
    return rows
}

async function addCategory(categoryName){
    let date = new Date()
        
        let hour = new Date().getHours()
            hour < 10 ? hour = '0' + String(hour) : hour
        let minutes = new Date().getMinutes()
            minutes < 10 ? minutes = '0' + String(minutes) : minutes

    let time = `${hour}:${minutes}`
    await pool.query(` INSERT INTO categories (name, cat_date, cat_time) VALUES ( $1, $2, $3)`,[categoryName,date,time])
}

async function deleteCategory(categoryId){
    await pool.query(`DELETE FROM categories WHERE id = $1`,[categoryId])
}

async function addFile(categoryId){

}

module.exports = {
    getIndividualCategory,
    getCategories,
    addCategory,
    deleteCategory
}