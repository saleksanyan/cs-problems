const x1 = 1;
const y1 = 0;
const x2 = 3;
const y2 = 4;

if (x1 < 0 || x2 < 0 || y1 < 0 || y2 < 0) {
    console.log("This exerscise is only for not negative numbers")

} else if (x1 >= 0 && x2 >= 0 && y1 >= 0 && y2 >= 0) {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 )
    console.log(length)
}

