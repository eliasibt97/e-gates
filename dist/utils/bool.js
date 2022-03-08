"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoolValue = void 0;
const getBoolValue = (value) => {
    let input = false;
    value = value.toLowerCase();
    switch (value) {
        case "true":
        case "1":
        case "on":
            input = true;
            break;
        default:
            input = false;
            break;
    }
    return input;
};
exports.getBoolValue = getBoolValue;
//# sourceMappingURL=bool.js.map