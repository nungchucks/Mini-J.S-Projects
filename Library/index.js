let myLibrary = [];
const addButton = document.querySelector('.addBookButton');
const addContainer = document.querySelector('.addBookContainer'); 
const submitButton = document.querySelector('.submitButton'); 
let author = document.getElementById('addAuthor'); 
let pages = document.getElementById('addPages'); 
let title = document.getElementById('addTitle'); 
let read = document.getElementById('readIt'); 

const Book = (author, title, pages) => {

}

const addBook = () => {

}

const displayBooks = () => {

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
    console.log(author.value); 
})

