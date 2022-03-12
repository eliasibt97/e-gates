import { Gates } from "../../gates/Gates";
import { Inputs } from "../../interfaces/inputs";
const gates = new Gates();

describe("OR Gate", () => {
    it("Given 'True & True Input' should return False output", () => {
        const inputs: Inputs = { input_one: true, input_two: true};
        expect(gates.nor(inputs)).toBe(false);
    })
    it("Given 'True & False Input' should return False output", () => {
        const inputs: Inputs = { input_one: true, input_two: false};
        expect(gates.nor(inputs)).toBe(false);
    })
    it("Given 'False & True Input' should return False output", () => {
        const inputs: Inputs = { input_one: false, input_two: true};
        expect(gates.nor(inputs)).toBe(false);
    })
    it("Given 'False & False Input' should return True output", () => {
        const inputs: Inputs = { input_one: false, input_two: false};
        expect(gates.nor(inputs)).toBe(true);
    })
})