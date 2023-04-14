const express = require('express');
const app = express();
const port = 8080;
const expressLayouts = require('express-ejs-layouts');
const  bodyParser = require('body-parser')
const db = require('./config/mongoose');
// below two line for read the data payload or body or postman call 
app.use(express.json());
app.use(express.urlencoded());

const cors = require('cors')
app.use(cors())

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//routes
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const userRoute = require('./routes/user');

app.use('/products', productRoute);
app.use('/carts', cartRoute);
app.use('/users', userRoute);


//  check port 
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
