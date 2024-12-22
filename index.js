require('dotenv').config()

const express = require('express')
// import express from  'express'
const app = express()

//const port = 3000 // default port


// get request
app.get('/', (req, res) => {
  res.send('Suvrodip Chakroborty')
})

app.get('/twitter', (req, res) => {
    res.send('Suvrodip Chakroborty on Twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login page</h1>')
});

app.get('/logout', (req, res) => {
    res.send('<h1>Logout page</h1>')
});

app.get('/youtube', (req, res) => {
    res.send('Suvrodip Chakroborty on YouTube')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})