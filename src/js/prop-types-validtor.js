export const propMin = (props,min=0,max=99999)=> {
    if (props === undefined) {
        return new Error("Sorry you must include a number for jumpingWords.");
    }
    if (isNaN(props)) {
        return new Error("Sorry jumpingWords must be a number.");
    }
    return props >= min  ? null : new Error(`Must be within over of ${min} `);
}

export const webUnits = ['rem','em','px'];