const express = require('express')
const axios = require('axios');
const app = express();
const port = 5501;

//baca file static
app.use(express.static('public'));
//confert response to json
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname +  '/views/index.html' );
})
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


//minta data jokes dair sistem luar

app.get('/joke', async(req, res) => {
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