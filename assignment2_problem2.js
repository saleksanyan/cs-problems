// the quadratic polynomial a*x^2 + b*x + c = 0

const a = 1;
const b = 9;
const c = -4;

if (a === 0) {
    const x = (-c)/b
    console.log("X = " + x)

}

const discriminant = (b ** 2) - (4 * a * c);

if (discriminant < 0 && a !== 0) {
    console.log("Unsolvable");

} else if (discriminant >= 0 && a !== 0) {
    const x1 = ((-b) + Math.sqrt(discriminant))/(2*a);
    const x2 = ((-b) - Math.sqrt(discriminant))/(2*a);

    if (x1 === x2) {
        console.log("X = " + x1);
    
    } else if (x1!== x2) {
        console.log("X1 = " + x1);
        console.log("X2 = " + x2)
    }
}

