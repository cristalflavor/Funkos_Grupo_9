const { conn } = require('../config/conn');


const getAllMulti = async (id) => {
    try {
        let consulta = 'SELECT * FROM product';

        if (!isNaN(id.charAt(0))) {
            consulta += ' WHERE product_id = ?';
        } else if (id.length === 9) {
            consulta += ' WHERE sku = ?';
        } else {
            consulta += ' WHERE product_name = ?';
        }

        const data = await conn.query(consulta, [id]);

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

const getAll = async () => {

    try{
        const data = await conn.query('SELECT * FROM product;');

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

const getAllWithCategory = async (id) => {
    try{
        const data = await conn.query('SELECT * FROM product WHERE category_id = ?;', [id]);

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

const setOne = async (product_id, product_name, product_description, product_price, stock, discount, sku, dues, img_front, img_back, create_time, category_id, licence_id) => {
    try{
        const data = await conn.query('UPDATE producto SET product_id = ?, product_name = ?, product_description = ?, product_price = ?, stock = ?, discount = ?, sku = ?, dues = ?, img_front = ?, img_back = ?, create_time = ?, category_id = ?, licence_id = ? WHERE product_id = ?;',
         [product_id, product_name, product_description, product_price, stock, discount, sku, dues, img_front, img_back, create_time, category_id, licence_id], product_id);
        
         console.log(data);
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

const getOne = async (id) => {

    try{
        const data = await conn.query('SELECT * FROM product WHERE product_id = ?;', [id]);
        
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
    getAll,
    getOne,
    getAllMulti,
    getAllWithCategory,
    setOne
}