export const getBoolValue = (value: string): boolean => {
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