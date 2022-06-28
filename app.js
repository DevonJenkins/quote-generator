import {quotes} from "./quotes.js"

let btn = document.getElementById("btn")
let text = document.getElementById("text")

btn.addEventListener("click", handleClick)


function handleClick() {
  mkRandNum()
  render()
}

function mkRandNum() {
  return Math.floor(Math.random() * quotes.length)
}
function render() {
  text.innerHTML = `${quotes[mkRandNum()]}`
}

