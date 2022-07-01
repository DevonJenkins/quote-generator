import {quotes} from "./quotes.js"

let tomatoes = "https://image.shutterstock.com/image-photo/two-tomatoes-different-sizes-on-600w-385824649.jpg"
let measuringTape = "https://image.shutterstock.com/image-photo/inch-measure-metric-side-by-600w-213045124.jpg"
let tomatoes2 = "https://image.shutterstock.com/image-photo/many-ripe-tomatoes-same-size-600w-670449220.jpg"
let shrinkflation = "https://image.shutterstock.com/image-photo/shrinkflation-concept-two-pencils-different-600w-2165215475.jpg"

let images = [tomatoes, measuringTape, tomatoes2, shrinkflation]

let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let text = document.getElementById("text")
let image = document.getElementById("image")

btn.addEventListener("click", handleClick)
btn2.addEventListener("click", theConchHasSpoken)

function handleClick() {
  mkRandNum()
  mkRandNum2()
  render()
}

function mkRandNum() {
  return Math.floor(Math.random() * quotes.length)
}
function mkRandNum2() {
  return Math.floor(Math.random() * images.length)
}
function render() {
  text.innerHTML = `${quotes[mkRandNum()]}`
  image.innerHTML = `<img src=${images[mkRandNum2()]}> `
}

function reset() {

}

function theConchHasSpoken() {
  text.remove()
  image.remove()
  document.body.innerHTML = '<img src=https://image.shutterstock.com/image-photo/note-colorful-wording-by-dice-600w-540541606.jpg > </br> <button id= " ">hi</button>'

}
