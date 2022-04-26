

const myInput = document.getElementById("input")
const myHeading= document.getElementById("heading")
const myButton = document.getElementById("button")
const Drinks = document.getElementsByTagName("li")

// myHeading.addEventListener("click", () => {
//     myHeading.style.color = "red"

// })

myButton.addEventListener("click", () => {
     myHeading.style.color =input.value
    Drinks.style.color ="red"
})

const list = document.getElementsbyTagName("li")

for (let i = 0; i < list.length; i++) {
    list[i].style.color = "orange";
}

console.log(list)
console.log(list.length)