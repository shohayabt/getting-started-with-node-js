### LIST OF TASKS TO STARTING WITH NODE JS && EXPRESS

##### CREATE PROJECT FOLDER

<pre><code> mkdir DAY-ONE </code></pre>

##### OPEN PROJECT FOLDER

<pre><code> CD DAY-ONE </code></pre>

##### OPEN WITH VS CODE

<pre><code> CODE .</code></pre>

##### INITIALIZE NPM

<pre><code>npm init -y</code></pre>

##### INSTALL EXPRESS && CORS && MONGODB

<pre><code> npm i express cors mongodb</code></pre>

##### INSTALL NODEMON

<pre><code> npm install -g nodemon </code></pre>
##### INSTALL CROS

<pre><code> npm install cors</code></pre>

##### UPDATE SCRIPTS IN package.json FILE

<pre><code> 
    "scripts": {
        "start": "node index.js", 
        "start-dev": "nodemon index.js",
    },
</code></pre>

#### PROJECT START WITH INDEX.JS

<pre><code> 
    const express = require('express')
    const app = express()
    const cros = require("cors")
    const port = process.env.PORT || 5000;

    app.use(cros());
    app.use(express());

    app.get('/', (req , res)=>{
    res.send("HELLO WORLD FROM NODE JS || EXPRESS")
    })

    app.listen(port,()=>{
    console.log("CRUD SERVER IS RUNNING ")
    })
</code></pre>

#### RUN PROJECT IN LOCAL HOST

<pre><code> 
   npm run start-dev
</code></pre>
