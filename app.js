const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 5173;

//Set-up EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Static File
app.use(express.static(path.join(__dirname, 'public')));

//Page Section (user)
app.get('/', (req, res) => {
    res.render('index.ejs', {
        title:'Welcome to website e-tb Tarowang',
        layout: 'index',
    });
});

app.get('/admin', (req, res) => {
    res.render('index-admin.ejs', {
        title:'Admin',
        layout: 'index-admin',
    });
});



//Port section
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

