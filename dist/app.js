"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Gates_1 = require("./gates/Gates");
const bool_1 = require("./utils/bool");
const method_1 = require("./middleware/method");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const gates = new Gates_1.Gates();
app.get('/:gate/:input_one/:input_two', (req, res, next) => {
    const gate = req.params.gate;
    if ((0, method_1.validateMethod)(gate)) {
        throw 'Method not allowed';
    }
    next();
}, (req, res) => {
    const gate = req.params.gate.toLowerCase();
    const inputs = {
        input_one: (0, bool_1.getBoolValue)(req.params.input_one),
        input_two: (0, bool_1.getBoolValue)(req.params.input_two)
    };
    res.json({
        success: true,
        output: gates[gate](inputs)
    });
});
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/home.html'));
});
app.listen(port, () => {
    console.log(`Express Server is listening on port ${port}`);
});
//# sourceMappingURL=app.js.map