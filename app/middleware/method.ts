import { Gates } from "../gates/Gates"
export const validateMethod = (gate: string) => {
    const gates: any = new Gates();
    if(!gates[gate.toLowerCase()]) return true;
    return false
}