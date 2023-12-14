const path = require('path');

const { getAll, getOne } = require('../models/product.model');
const { getAllLicence, getOneLicence } = require('../models/licence.model');
module.exports = {
    
    shop: async (req, res) => {
        
        const data = await getAll();
        
        if(data.error){
            res.render(path.resolve(__dirname, '../views/error/error.ejs'),
            {
                title: 'Error',
                error: true,
                message: 'Estamos experimentando inconvenientes técnicos',
                message2: 'Prueba más tarde, por favor!'
            }
            )
        }else{
            const [rows, info] = data;
            res.render(path.resolve(__dirname, '../views/shop/shop.ejs'),
            {
                title: 'Shop',
                rows
            }
        )
        }
        
        
    },
    item: async (req, res) => {

        const { id } = req.params;
        const prod = await getOne(id);
        

        //console.log('licence_id: ' + id_licence);
       // console.log('lic: ' +  lic);

        if(prod.error){
            res.render(path.resolve(__dirname, '../views/error/error.ejs'),
            {
                title: 'Error',
                error: true,
                message: 'Estamos experimentando inconvenientes técnicos',
                message2: 'Prueba más tarde, por favor!'
            }
            )
        }else{
            const [prodRows, prodInfo] = prod;

            const licence_id = prodRows.licence_id;
            console.log(licence_id);
            const lic = await getOneLicence(licence_id);
            const [licRows, licInfo] = lic;

            console.log(licRows.licence_name);
            res.render(path.resolve(__dirname, '../views/shop/item.ejs'),
            {
                title: 'Item',
                prodRows,
                licRows
            }
        )
        }
        
    },
    add: (req, res) => res.send('Ruta para agregar nuevo item'),
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'))
    },
    post_cart: (req, res) => res.send('Ruta para agregar un item al carrito')
}