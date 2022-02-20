import { Inputs } from "../interfaces/inputs";

export class Gates {
    
    and = (inputs: Inputs): boolean => inputs.input_one && inputs.input_two ? true : false;
    nand = (inputs: Inputs): boolean => inputs.input_one && inputs.input_two ? false : true;

    or = (inputs: Inputs): boolean => inputs.input_one || inputs.input_two ? true: false;
    nor = (inputs: Inputs): boolean => inputs.input_one || inputs.input_two ? false : true;
    xor = (inputs: Inputs): boolean => {
        if ((inputs.input_one && inputs.input_two) || (!inputs.input_one && !inputs.input_two)) {
            return false;
        }
            return true;
    };

    not = (a: boolean): boolean => !a;
}