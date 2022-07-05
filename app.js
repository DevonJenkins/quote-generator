import {quotes} from "./quotes.js"

let tomatoes = "https://image.shutterstock.com/image-photo/two-tomatoes-different-sizes-on-600w-385824649.jpg"
let measuringTape = "https://image.shutterstock.com/image-photo/inch-measure-metric-side-by-600w-213045124.jpg"
let tomatoes2 = "https://image.shutterstock.com/image-photo/many-ripe-tomatoes-same-size-600w-670449220.jpg"
let shrinkflation = "https://image.shutterstock.com/image-photo/shrinkflation-concept-two-pencils-different-600w-2165215475.jpg"

let images = [tomatoes, measuringTape, tomatoes2, shrinkflation]

let btnContainer = document.getElementById("btn-container")
let text = document.getElementById("text")
let image = document.getElementById("image")

function init() {
  createMainBtns()
}

init()

function handleClick() {
  mkRandNum()
  mkRandNum2()
  render()
}

//-----------------------------------------------
//                    Helper functions 
//-----------------------------------------------
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
  resetBtnRemove()
  createMainBtns()
  image.innerHTML = ''
}

function resetBtnRemove() {
  let resetBtn = document.getElementById('reset-btn')
  if (!resetBtn) {
    console.log('no reset button')
  } else {
    resetBtn.remove()
    console.log('reset')
  }
}

function theConchHasSpoken() {
  removeMainBtns()
  resetBtnRemove()
  text.innerText = ''
  image.innerHTML = '<img src=https://image.shutterstock.com/image-photo/note-colorful-wording-by-dice-600w-540541606.jpg >'
  createResetBtn()
}

function createResetBtn() {
  const button = document.createElement('button')
  button.innerHTML = "reset"
  button.id = 'reset-btn'
  button.addEventListener('click', reset)
  btnContainer.append(button)
}

function createMainBtns() {
  removeMainBtns()
  const btn = document.createElement('button')
  const btn2 = document.createElement('button')
  btn.id = 'btn'
  btn2.id = 'btn2'
  btn.innerHTML = 'press me'
  btn2.innerHTML = 'The Conch has spoken.'
  text.innerHTML = 'Welcome'
  btnContainer.append(btn)
  btnContainer.append(btn2)
  btn.addEventListener('click', handleClick)
  btn2.addEventListener('click', theConchHasSpoken)
}

function removeMainBtns() {
  let btn = document.getElementById('btn')
  let btn2 = document.getElementById('btn2')
  if (!btn) {
    console.log('no btn')
  } else {
    btn.remove()
  }
  if (!btn2) {
    console.log('no btn2')
  } else {
    btn2.remove()
  }
}

