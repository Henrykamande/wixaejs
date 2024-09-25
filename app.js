const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for your views
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});