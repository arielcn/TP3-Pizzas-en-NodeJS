import {PizzaService} from './pizza-services.js';
import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/pizza/', async (req, res) => {
    let devol = await PizzaService.getAll();
    res.send(devol);
})

app.get('/pizza/:id', async (req, res) => {
    let devol = await PizzaService.getById(req.params.id);
    res.send(devol);
})

app.post('/pizza', async (req, res) => {
    try {
        let devol = await PizzaService.insert(req.body);
        res.send(devol);
    } catch (error) {
        console.error(error);
    }
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})