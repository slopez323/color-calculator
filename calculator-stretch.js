const prompt = require("prompt-sync")()

let color = prompt(`Input the color you would like to deconstruct (purple, orange or green) OR the 2 colors (red, blue or yellow) you would like to combine separated by a space. `).toLowerCase()

// console.log(`input has ${color.split(' ').length - 1} spaces`)

if ((color.split(' ').length - 1) === 0) {
    if (color === "purple") {
        console.log("Deconstructing purple gives you red and blue.")
    } else if (color === "orange") {
        console.log("Deconstructing orange gives you red and yellow.")
    } else if (color === "green") {
        console.log("Deconstructing green gives you blue and yellow.")
    } else {
        console.log("error")
    }
} else if (color.includes("red") && color.includes("blue")) {
    if ((color.split(' ').length - 1) > 1) {
        console.log("Too many inputs.")
    } else {
        console.log("Combining red and blue results to purple.")
    }
} else if (color.includes("red") && color.includes("yellow")) {
    if ((color.split(' ').length - 1) > 1) {
        console.log("Too many inputs.")
    } else {
        console.log("Combining red and yellow results to orange.")
    }
} else if (color.includes("yellow") && color.includes("blue")) {
    if ((color.split(' ').length - 1) > 1) {
        console.log("Too many inputs.")
    } else {
        console.log("Combining yellow and blue results to green.")
    }
} else {
    console.log("error")
}