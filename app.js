const path = require('path');
const express = require('express');
const port = 800;

const app = express();

// EXPRESS RELATED STUFF
app.use('/static', express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded());

// PUG RELATED STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    const con = "This is test content";
    const params = {'title': 'Test title', 'content': con};

    res.status(200).render('home.pug', params);
});

app.get('/contact', (req,res) => {
    const con = "This is test content";
    const params = {'title': 'Test title', 'content': con};

    res.status(200).render('contact.pug', params);
});

app.listen(port, () => {
    console.log('The application started on the localhost port: ' + port);
})