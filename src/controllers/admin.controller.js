const path = require('path');

module.exports = {
    admin: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'))
    },
    create: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'))
    },
    post_create: (req, res) => res.send('Esta es la vista para agregar un nuevo item'),
    edit: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'))
    },
    put_edit: (req, res) => res.send('Esta es la vista para impactar la modificación'),
    delete_it: (req, res) => res.send('Esta es la vista para eliminar un item específico')
}