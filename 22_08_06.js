/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]

8kyu
*/

function getSize(width,height,depth){
    let result = []
    let surfaceArea = 2 * ((depth * width) + (depth * height) + (height * width))
    let volume = width * height * depth
    result.push(surfaceArea)
    result.push(volume)
    return result
}