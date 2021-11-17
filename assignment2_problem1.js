const  triangleHeight = 20;
const  triangleBase = 30;
const rectangleHeight = 40;
const rectangleWidth = 20;
if (triangleBase>0 && triangleHeight>0 && rectangleHeight>0 && rectangleWidth > 0) {
    const triangleArea = (triangleBase * triangleHeight) / 2;
    const rectangleArea = rectangleHeight * rectangleWidth;
    if (rectangleArea > triangleArea) {
        console.log("The rectangle has a bigger area");
    } 
    if (rectangleArea < triangleArea) {
        console.log("The triangle has a bigger area");
    }
    if (rectangleArea === triangleArea) {
        console.log("They are equel");
    }
}