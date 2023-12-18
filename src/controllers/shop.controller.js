const path = require('path');

const { getAll, getOne } = require('../models/product.model');
const { getAllLicence, getOneLicence } = require('../models/licence.model');
module.exports = {
    
    shop: async (req, res) => {
        const isLogged = req.session.isLogged;

        if(req.session.isLogged === undefined){
            req.session.isLogged = false;
        }
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
                rows,
                isLogged
            }
        )
        }
        
        
    },
    item: async (req, res) => {
        const isLogged = req.session.isLogged;

        if(req.session.isLogged === undefined){
            req.session.isLogged = false;
        }
        const { id } = req.params;
        const prod = await getOne(id);
        const prods = await getAll();

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

            const lic = await getOneLicence(licence_id);
            const [licRows, licInfo] = lic;

            const [prodsArray, prodsInfo] = prods;

            const licencePromises = prodsArray.map(async (product) => {
                const licence_id = product.licence_id;
                const lic = await getOneLicence(licence_id);
                const [licRows, licInfo] = lic;
                return { ...product, licRows };
              });

            const prodSlider = await Promise.all(licencePromises);

            console.log(prodSlider[10].licRows.licence_name);
            res.render(path.resolve(__dirname, '../views/shop/item.ejs'),
            {
                title: 'Item',
                prodRows,
                licRows,
                prodSlider,
                isLogged
            }
        )
        }
        
    },
    add: (req, res) => res.send('Ruta para agregar nuevo item'),
    cart: (req, res) => {
        const isLogged = req.session.isLogged;

        if(req.session.isLogged === undefined){
            req.session.isLogged = false;
        }
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'),
        {
            title: 'Cart',
            isLogged
        })
    },
    post_cart: (req, res) => res.send('Ruta para agregar un item al carrito')
}