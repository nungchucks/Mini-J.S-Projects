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
    
class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

const addBook = () => {
  // Create a new book object
  const newBook = new Book(author.value, title.value, pages.value, read.checked);

  // Add the book object to the myLibrary array
  myLibrary.push(newBook);
}

  const displayBooks = () => {
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
