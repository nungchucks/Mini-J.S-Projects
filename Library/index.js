const addButton = document.querySelector('.addBookButton');
const addContainer = document.querySelector('.addBookContainer'); 
const submitButton = document.querySelector('.submitButton'); 
const booksContainer = document.querySelector('.booksContainer');
let author = document.getElementById('addAuthor'); 
let pages = document.getElementById('addPages'); 
let title = document.getElementById('addTitle'); 
let read = document.getElementById('readIt'); 

let myLibrary = [];

const toggleAddBookContainer = () => {
  
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.addBookContainer') && addContainer.style.visibility === 'visible' && !event.target.closest('.addBookButton')) {
        addContainer.style.visibility = 'hidden';
      }
    });
}
    

const addBook = () => {
    // Create a new book object
    const book = {
      author: author.value,
      title: title.value,
      pages: pages.value,
      read: read.checked
    };
  
    // Add the book object to the myLibrary array
    myLibrary.push(book);
  }
  
  const displayBooks = () => {
    console.log("Displaying books!");
    // Clear the booksContainer element
    booksContainer.innerHTML = '';
  
    // Loop through the myLibrary array
    for (const book of myLibrary) {
      // Create a new book card element
      const bookCard = document.createElement('div');
      bookCard.classList.add('book');
      bookCard.style="padding-top: 5px; padding-right: 10px; padding-bottom: -50px; padding-left: 20px;"
  
      // Set the book card's content to the book's title, author, and page count
      if (book.read) {
        bookCard.innerHTML = `
          <h2>${book.title}</h2>
          <p>By ${book.author}</p>
          <p>${book.pages} pages</p>
          <button type="button" style="background-color: #56a66b; border-radius: 10px; width:100px; margin: auto;">Read</button>`
        }
      else {
        bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>By ${book.author}</p>
        <p>${book.pages} pages</p>
        <button type="button" style="background-color: #d14f4f; border-radius: 10px; width:100px; margin: auto;">Not read</button>`
      }
  
      // Append the book card to the booksContainer element
      booksContainer.appendChild(bookCard);
    }
  }

  const readButtons = document.querySelectorAll('.book .read-button');

  readButtons.forEach(button => {
    button.addEventListener('click', event => {
      // Get the book element that the button belongs to
      const bookElement = event.target.closest('.book');
      // Get the index of the book in the myLibrary array
      const bookIndex = myLibrary.findIndex(book => book.title === bookElement.querySelector('h2').textContent);
      // Toggle the read status of the book
      myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
      // Update the book card's display
      displayBooks();
    });
  });
  


addButton.addEventListener('click', () => {
    addContainer.style.visibility = 'visible'
    if (read.checked) {
        read.checked = false; 
    }
    author.value = null; 
    title.value = null; 
    pages.value = null; 
})

submitButton.addEventListener('click', () => {
    addContainer.style.visibility = 'hidden'
    addBook();
    displayBooks();
})

toggleAddBookContainer();
