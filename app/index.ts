import express from 'express';
import { Gates } from './gates/Gates';
import { getBoolValue } from './utils/bool';
import { validateMethod } from './middleware/method';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const gates:any = new Gates();

app.get('/:gate/:input_one/:input_two', (req, res, next) => {
    const gate: string = req.params.gate;
    if(validateMethod(gate)){
        throw 'Method not allowed';
    }
    next();
}, (req, res) => {
    const gate: string = req.params.gate.toLowerCase();
    const inputs = { 
        input_one: getBoolValue(req.params.input_one),
        input_two: getBoolValue(req.params.input_two)
    };
    res.json({
        success: true,
        output: gates[gate](inputs)
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/home.html'));
});

app.listen(port, () => {
    console.log(`Express Server is listening on port ${port}`);
});