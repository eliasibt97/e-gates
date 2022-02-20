"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gates = void 0;
class Gates {
    constructor() {
        this.and = (inputs) => inputs.input_one && inputs.input_two ? true : false;
        this.nand = (inputs) => inputs.input_one && inputs.input_two ? false : true;
        this.or = (inputs) => inputs.input_one || inputs.input_two ? true : false;
        this.nor = (inputs) => inputs.input_one || inputs.input_two ? false : true;
        this.xor = (inputs) => {
            if ((inputs.input_one && inputs.input_two) || (!inputs.input_one && !inputs.input_two)) {
                return false;
            }
            return true;
        };
        this.not = (a) => !a;
    }
}
exports.Gates = Gates;
//# sourceMappingURL=Gates.js.map