const express = require('express'); // Express to a quickier way of  creating a server with mongodb 
const app = express();  
const PORT = process.env.PORT || 5000; // Server location is localhost:5000 or If process.env.PORT
const connectDB = require('./config/db'); // Requiring Connection to mongodb and mongoose connection



// Connect Database
connectDB();

// using json data
app.use(express.json({extented: false}));

// Setting up main server 
app.get('/', (req,res) => { // Get is working 
    res.send("API IS RUNNING ")
});

// Defining Routes
app.use('/api/users', require('./routes/api/users')); // Defining User route
app.use('/api/auth', require('./routes/api/auth')); // Defining Auth route
app.use('/api/profiles', require('./routes/api/profiles'));  // Defining profiles route
app.use('/api/posts', require('./routes/api/post')); // Defining Post route

// Int Server 
app.listen( PORT, () => {
    console.log(`PORT Is Listening on localhost:${PORT}`)
})