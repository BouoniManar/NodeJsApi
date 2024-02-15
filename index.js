const express = require('express');
const app = express();



app.listen(8080, () => {
    console.log('Serveur à lécoute')       })


const parkings = require('./parkings.json')
app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
});


// Middlewareapp.use(express.json())
app.post('/Add', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
});

app.put('/delete/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
        parking.city =req.body.city,
        parking.type =req.body.type,
        res.status(200).json(parking)
})

app.delete('/delete/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
});