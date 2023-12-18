const express = require('express');

const session = require('express-session');
const app = express();
const path = require('path');

const methodOverride = require('method-override');


const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');

const PORT = 3000;

// Template Engines

app.set(`view engine`, `ejs`);
app.set('views', path.join(__dirname, './src/views'));

// Middlewares de configuración

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'yippiekayyay', // Cambia esto a una cadena de texto segura
    resave: false,
    saveUninitialized: true
  }));
app.use(express.static('public_html'));

// Rutas

app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/', mainRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));