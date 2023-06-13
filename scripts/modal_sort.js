const sort_button = document.querySelector("#sort_button")
const sort_restart = document.querySelector("#sort_restart")
const sort_display = document.querySelector("#sort_display")

let sort_array = [
    "Manzana", "Uva", "Piña", "Pera", "Mango", "Banana", "Kiwi", "Sandia",
    "Mandarina", "Naranja", "Melon", "Maracuya", "Fresa", "Coco", "Durazno",
]

display(sort_display, sort_array)

sort_button.addEventListener('click', (e) => {
    e.preventDefault()
    let result = [...sort_array].sort()
    display(sort_display, result)
})

sort_restart.addEventListener('click', (e) => {
    e.preventDefault()
    display(sort_display, sort_array)
})