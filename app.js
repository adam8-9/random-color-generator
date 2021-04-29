let body = document.querySelector("body")
let h2 = document.querySelector("h2")
let button = document.querySelector("button")

button.addEventListener("click", (e) => {
    e.preventDefault()
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    h2.innerText = rgb;


})
