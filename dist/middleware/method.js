"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMethod = void 0;
const Gates_1 = require("../gates/Gates");
const validateMethod = (gate) => {
    const gates = new Gates_1.Gates();
    if (!gates[gate.toLowerCase()])
        return true;
    return false;
};
exports.validateMethod = validateMethod;
//# sourceMappingURL=method.js.map