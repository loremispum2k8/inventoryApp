const pool = require('./pool')

async function getCategories(){
    const {rows} = await pool.query('SELECT * FROM categories')
    return rows
}

async function getIndividualCategory(categoryId){
    const {rows} = await pool.query(`SELECT * FROM categories WHERE id = $1`,[categoryId])
    return rows
}

async function getIndividualItem(itemId){
    const {rows} = await pool.query(`SELECT * FROM items WHERE id = $1`,[itemId])
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
    await pool.query(`DELETE FROM items WHERE category_id = $1`,[categoryId])
    await pool.query(`DELETE FROM categories WHERE id = $1`,[categoryId])
}

async function editCategory(categoryName,categoryId){
    await pool.query('UPDATE categories SET name = $1 WHERE id = $2',[categoryName,categoryId])
}

async function editItem(itemName,itemUrl,itemId){
    await pool.query('UPDATE items SET name = $1, url = $2 WHERE id = $3',[itemName,itemUrl,itemId])
}

async function addItem(fileName,fileUrl,categoryId){
    let date = new Date()
        let hour = new Date().getHours()
        hour < 10 ? hour = '0' + String(hour) : hour
        let minutes = new Date().getMinutes()
        minutes < 10 ? minutes = '0' + String(minutes) : minutes
    let time = `${hour}:${minutes}`

    await pool.query('INSERT INTO items (name, url ,category_id, item_date, item_time) VALUES($1,$2,$3,$4,$5);',[fileName,fileUrl,categoryId,date,time])
}

async function getItems(categoryId){
    const {rows} = await pool.query('SELECT * FROM items WHERE category_id = $1',[categoryId])
    return rows
}

async function removeItem(itemId){
    await pool.query(`DELETE FROM items WHERE id = $1`,[itemId])
}

module.exports = {
    getIndividualCategory,
    getCategories,
    addCategory,
    deleteCategory,
    editCategory,
    addItem,
    getItems,
    getIndividualItem,
    removeItem,
    editItem
}