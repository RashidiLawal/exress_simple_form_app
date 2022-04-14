/**          CREATING EXPRESS APP                  **/

/* const express = require("express")
const app = express();

app.get("/ping", (req, res) => {
    res.send("Express Application")
});

app.listen(3000, ()=> {console.log("Server started on PORT 3000")}) */


/**            MIDDLEWARE                    **/

/* const express = require("express")
const app = express();

const myLogger = function(req, res, next){
    console.log("LOGGED")
    next()
}
 
const requestTime = function(req, res, next){
    req.reqTime = Date.now()
    next()
}
app.use(myLogger)
app.use(requestTime)

app.get('/', function(req, res){
    res.send(`Current Time:${req.reqTime}`);
})

app.listen(3000, () => console.log('App running on server port 3000')) */



/**            WORKING WITH STATIC FILES          **/

// serving static files in Express

// static file from the public folder or directory
/* const express = require("express")
const app = express();

app.use(express.static('public'))

app.get('/', function(req, res){
    res.send(`Static Files`)
})

app.listen(3000, () => console.log("Application on PORT 3000")) */



// static file from different folders or directories
/* const express = require("express")
const app = express();

app.use(express.static('public'))
app.use(express.static('images'))
app.use(express.static('files'))

app.get('/', function(req, res){
    res.send(`Static Files`)
})

app.listen(3000, () => console.log("Application on PORT 3000")) */



// a static file from a particular folder or directory
/* const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('files'));

<img src="/img_girl.jpg"/>

app.get('/', function(req, res){
    res.send(`Static Files`);
})

app.listen(3000, () => console.log("Application on PORT 3000")); */



// a static file from the static folder or directory within the public folder or directory
/* const express = require("express");
const app = express();

app.use('/public', express.static('static'));

<img src="/img_girl.jpg"/>

app.get('/', function(req, res){
    res.send(`Static Files`);
})

app.listen(3000, () => console.log("Application on PORT 3000")); */



// a static file from the static folder or directory within the public folder or directory whose name has changed
/* const express = require("express");
const path = require("path");

const app = express();

const publicpath = path.resolve(__dirname, 'public');

app.use('/publicpath', express.static('static'));

<img src="public/img_girl.jpg"/>

app.get('/', function(req, res){
    res.send(`Static Files`);
})

app.listen(3000, () => console.log("Application on PORT 3000")); */




/**                 EXPRESS ROUTING                 **/
// Routing with Express
/* const express = require("express")
const app = express();

const PORT = 3000;

const data = {
    id: 1,
    name: "india"
}

app.get('/', (req, res) => {
    res.end("welcome to my Homepage")
})


app.get('/about', (req, res) => {
    res.end("welcome to my about page")
})


app.get('/weather', (req, res) => {
    res.end("The current weather is cool")
})


app.listen(PORT, () => {console.log("Server started on PORT", PORT)}) */



// using the weather route, sending a data type rather than the static text or data

/* const express = require("express")
const app = express();

const PORT = 3000;

const data = {
    id: 1,
    name: "india"
} 

app.get('/', (req, res) => {
    res.end("welcome to my Homepage")
})


app.get('/about', (req, res) => {
    res.end("welcome to my about page")
})


app.get('/weather', (req, res) => {
    res.send(data)
})


app.listen(PORT, () => {console.log("Server started on PORT", PORT)}) */




// returnimg response in JSON type
/* const express = require("express")
const app = express();

const PORT = 3000;

const data = {
    id: 1,
    name: "india"
}

app.get('/', (req, res) => {
    res.end("welcome to my Homepage")
})


app.get('/about', (req, res) => {
    res.end("welcome to my about page")
})


app.get('/weather', (req, res) => {
    res.json(data)
})


app.listen(PORT, () => {console.log("Server started on PORT", PORT)})
 */



// sending file as response
/* const express = require("express")
const app = express();

const PORT = 3000;

const data = {
    id: 1,
    name: "india"
}

app.get('/', (req, res) => {
    res.end("welcome to my Homepage")
})


app.get('/about', (req, res) => {
    res.end("welcome to my about page")
})


app.get('/weather', (req, res) => {
    res.sendFile("then sample file path")
})


app.listen(PORT, () => {console.log("Server started on PORT", PORT)})
 */




/**                       VIEWS                   **/

/* const express = require("express");
const app = express();

const PORT = 3000;

app.set('view engine', 'pug')

// when you change the name of the default template engines FileSystemDirectoryEntry, use as below after the one as above

// app.set('views','/roms')

app.set('view engine','pug')

app.get('/', function(req, res){
    res.render('index')
}).listen(PORT, () => {console.log("Server started on http://localhost:3000")}) */



// passing values rather than hardcoded
/* const express = require("express");
const app = express();

const PORT = 3000;

app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.render('index', {title:'Express View Engine', h1:'Express Application', p:'Express Template Engine'})
}).listen(PORT, () => {console.log("Server started on http://localhost:3000")}) */




/**              EXPRESS FORM                       **/

const express = require("express")
const path = require("path")
const app = express()

const PORT = process.env.PORT || 3000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug")

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render("index", {title:"Form Handling"})
})

app.post("/form_submit", (req, res) => {
    const username = req.body.username
    const email = req.body.email
    res.end(`Your Username is: ${username} and Email is ${email}`)
})


app.listen(PORT, () => {
    console.log(`Listen to requests on http://localhost:${PORT}`)
})