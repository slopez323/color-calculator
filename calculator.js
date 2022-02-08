const prompt = require("prompt-sync")();

let action = Number(prompt(`Would you like to combine or deconstruct colors?  Press 1 if combine and 2 if deconstruct. `))

if (action === 1){
    let color1 = prompt(`What is the first primary color you would like to combine? Red, blue or yellow? `).toLowerCase()
    let color2 = prompt(`What is the second primary color you would like to combine? Red, blue or yellow? `).toLowerCase()
    if (color1 === color2){
        console.log("First color must be different from second color.")
    } else if ((color1 === "red" && color2 === "blue") || (color2 === "red" && color1 === "blue")) {
        console.log(`Combining ${color1} and ${color2} results to purple.`)
    } else if ((color1 === "red" && color2 === "yellow") || (color2 === "red" && color1 === "yellow")) {
        console.log(`Combining ${color1} and ${color2} results to orange.`)
    } else if ((color1 === "yellow" && color2 === "blue") || (color2 === "yellow" && color1 === "blue")) {
        console.log(`Combining ${color1} and ${color2} results to green.`)
    } else {
        console.log("error")
    }
} else if (action === 2){
    let color = prompt(`What color would you like to deconstruct?  Purple, orange or green? `).toLowerCase()
    if (color === "purple"){
        console.log("Deconstructing purple gives you red and blue.")
    } else if (color === "orange"){
        console.log("Deconstructing orange gives you red and yellow.")
    } else if (color === "green"){
        console.log("Deconstructing green gives you blue and yellow.")
    } else {
        console.log("error")
    }
} else {
    console.log("Invalid input.")
}