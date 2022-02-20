"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Gates_1 = require("./gates/Gates");
const bool_1 = require("./utils/bool");
const app = (0, express_1.default)();
const port = 3000;
const gates = new Gates_1.Gates();
app.get('/:gate/:input_one/:input_two', (req, res, next) => {
    const gate = req.params.gate;
    if (!gates[gate]) {
        res.send({
            success: false,
            message: 'No method allowed',
            output: null
        }).status(500);
        throw {
            success: false,
            message: 'No method allowed',
            output: null
        };
    }
    next();
}, (req, res) => {
    const gate = req.params.gate;
    const inputs = {
        input_one: (0, bool_1.getBoolValue)(req.params.input_one),
        input_two: (0, bool_1.getBoolValue)(req.params.input_two)
    };
    res.json({
        success: true,
        output: gates[gate](inputs)
    });
});
app.listen(port, () => {
    console.log(`Express Server is listening on port ${port}`);
});
//# sourceMappingURL=app.js.map