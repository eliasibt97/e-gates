import express from 'express';
import { Gates } from './gates/Gates';
import { getBoolValue } from './utils/bool';
import { validateMethod } from './middleware/method';

const app = express();
const port = 3000;
const gates:any = new Gates();

app.get('/:gate/:input_one/:input_two', (req, res, next) => {
    const gate: string = req.params.gate;
    if(validateMethod(gate)){
        throw 'Method not allowed';
    }
    next();
}, (req, res) => {
    const gate: string = req.params.gate;
    const inputs = { 
        input_one: getBoolValue(req.params.input_one),
        input_two: getBoolValue(req.params.input_two)
    };
    res.json({
        success: true,
        output: gates[gate](inputs)
    });
});

app.listen(port, () => {
    console.log(`Express Server is listening on port ${port}`);
});