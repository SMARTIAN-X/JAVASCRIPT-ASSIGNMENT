function rectangleArea(rectangle){
    return rectangle.map(rectangle => rectangle.length * rectangle.width)
}

const rectangle = [
    {length: 5, width: 3},
    {length: 10, width: 4}
]

console.log(rectangleArea(rectangle))