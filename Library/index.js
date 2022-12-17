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
  
      // Set the book card's content to the book's title, author, and page count
      bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>By ${book.author}</p>
        <p>${book.pages} pages</p>`;
  
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
