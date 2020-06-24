const express = require('express'); // Express to a quickier way of  creating a server with mongodb 
const app = express(); 
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');



// Connect Database

connectDB();

app.use(express.json({extented: false}));
app.get('/', (req,res) => { // Get is working 
    res.send("API IS RUNNING ")
});

// Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/post'));




app.listen( PORT, () => {
    console.log(`PORT Is Listening on localhost:${PORT}`)
})