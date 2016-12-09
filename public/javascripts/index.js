function toggleViz(selector) {
  var element = document.querySelector(selector)

  if ( element.style.display === 'block' ) {
    element.style.display = 'none'
  } else {
    element.style.display = 'block'
  }
}

document.querySelector('.gcli')
  .addEventListener('keydown', function (event) {
    event.stopPropagation()
  })

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "?":
      toggleViz('aside.help')
  }
})

/*
var init = {
  method: 'GET',
  headers: new Header(),

fetch('localhost:3000/api/v1/books', 
*/

var jawn = document.querySelector('.gcli')
function doIt () {
  console.log(jawn.value)
}
