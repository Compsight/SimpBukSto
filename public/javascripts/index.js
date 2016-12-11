class Book {
  constructor ( authors, categories, title ) {
    this.authors    = authors
    this.categories = categories
    this.title      = title
  }
}

class Librarian {
  addBook ( book ) {
    console.log( book )
    let req = new Request( 'api/v1/book', {
      method: 'POST'
     ,headers: new Headers({ 'Content-Type': 'application/json'})
     ,body: JSON.stringify( book )
    })
    fetch( req )
      .then( res => res.json )
      .then( data => data )
      .catch( error => console.log( 'Request failed', error ) )
  }
  getBook ( bookId ) {

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
  parseAndFetch( cli.value )
} )

window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "?":
      toggleViz('aside.help')
  }
})

function parseAndFetch ( commandString ) {
  let
    command    = [ '', /^\s*:((?:add)|(?:update)|(?:remove))/ig ]
   ,general    = [ '', /^([^@_#]*)\b/ig ]
   ,title      = [ '', /_\s*([^#|@|_]*)\b/ig ]
   ,authors    = [ [], /@\s*([^#|@|_]*)\b/ig ]
   ,categories = [ [], /#\s*([^#|@|_]*)\b/ig ]
   ,match
  
  while ((match = command[1].exec(commandString))) {
    command[0] = match[1].toLowerCase()
  }
  
  while ((match = general[1].exec(commandString))) {
    general[0] = match[1].toLowerCase()
  }
  
  general[0] = general[0].split(' ')
  
  while ((match = title[1].exec(commandString))) {
    title[0] = match[1].toLowerCase()
  }
  
  while ((match = authors[1].exec(commandString))) {
    authors[0].push(match[1].toLowerCase())
  }
  
  while ((match = categories[1].exec(commandString))) {
    categories[0].push(match[1].toLowerCase())
  }
  
  switch ( command[0] ) {
    case 'add':
      let book = new Book (
        authors[0]
       ,categories[0]
       ,title[0]
      )
      dewey.addBook( book )
      break;
    case 'update':
      dewey.updateBook( bookId, book )
      break;
    case 'remove':
      dewey.removeBook( bookId )
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

