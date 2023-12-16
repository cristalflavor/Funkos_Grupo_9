const { conn } = require('../config/conn');

const getAllCategory = async () => {

    try{
        const data = await conn.query('SELECT * FROM category;');

        return data;
    }catch(error){
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }
    }finally{
        conn.releaseConnection();
    }
}

const getAllCategoryName = async (id) => {

    try{
        const data = await conn.query('SELECT * FROM category WHERE category_name = ?;', [id]);

        return data;
    }catch(error){
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }
    }finally{
        conn.releaseConnection();
    }
}

const getOneCategory = async (id) => {

    try{
        const data = await conn.query('SELECT * FROM category WHERE category_id = ?;', [id]);

        return data[0];
    }catch(error){
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }
    }finally{
        conn.releaseConnection();
    }
}

module.exports = {
    getAllCategory,
    getOneCategory,
    getAllCategoryName
}