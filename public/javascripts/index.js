class Book {
  constructor ( authors, categories, title ) {
    this.authors    = authors
    this.categories = categories
    this.title      = title
  }
}

class Librarian {
  addBook ( book ) {

  }
  getBook ( bookID ) {

  }
  findBooks ( parameters ) {

  }
  updateBook ( bookId, book ) {

  }
  removeBook ( bookId ) {

  }
}

const dewey = new Librarian

const cliForm = document.querySelector( 'form.cli' )
const cli = document.querySelector('.cli input')

cli.addEventListener('keydown', function (event) {
  event.stopPropagation()
})

cliForm.addEventListener( 'submit', event => {
  event.preventDefault()
  console.log( event.srcElement.elements.cli.value )
  parseUserCommand( 
} )

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "?":
      toggleViz('aside.help')
  }
})

function parseUserCommand ( commandString ) {
  let
    command    { value:  '', regex: /^\s*:((?:add)|(?:update)|(?:remove))/ig }
    general    { value:  '', regex: /^([^@_#]*)\b/ig }
    title      { value:  '', regex: /\_\s*([^#|@|_]*)\b/ig }
    authors    { value:  [], regex: /@\s*([^#|@|_]*)\b/ig }
    categories { value:  [], regex: /#\s*([^#|@|_]*)\b/ig }
    }
   ,match
  
  while ((match = command.regex.exec(commandString))) {
    command.value = match[1].toLowerCase()
  }
  
  if ( command.value === '' ) { command.value = 'search' }
  
  while ((match = general.value.exec(commandString))) {
    general.value = match[1].toLowerCase()
  }
  
  general.value = general.value.split(' ')
  
  while ((match = title.regex.exec(commandString))) {
    title.value = match[1].toLowerCase()
  }
  
  while ((match = author.regex.exec(commandString))) {
    authors.value.push(match[1].toLowerCase())
  }
  
  while ((match = category.regex.exec(commandString))) {
    categories.value.push(match[1].toLowerCase())
  }
  
  switch ( command.value ) {
    case 'add':
      dewey.addBook(  )
      break;
    case 'update':
      dewey.updateBook(  )
      break;
    case 'remove':
      dewey.removeBook(  )
      break;
    default:
      dewey.findBooks(  )
  }
}

function toggleViz(selector) {
  var element = document.querySelector(selector)

  if ( element.style.display === 'block' ) {
    element.style.display = 'none'
  } else {
    element.style.display = 'block'
  }
}

