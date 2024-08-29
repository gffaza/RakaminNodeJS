const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//minta data jokes dair sistem luar

app.get('/', async(req, res) => {
    try{
        const response = await axios.get('https://v2.jokeapi.dev/joke/Dark?type=single');
        const joke = response.data.joke;
        res.json({joke})
    }catch(error){
        res.status(500).json({error : 'Failed get data'});
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})