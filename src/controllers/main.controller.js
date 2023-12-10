module.exports = {
    home: (req, res) => res.render('index_ejs', {
        title: 'Home | Funkoshop'
    }),
    contact: (req, res) => res.send('Vista de Contacto'),
    faqs: (req, res) => res.send('Vista de FAQ')
};