let myLibrary = [];
const addButton = document.querySelector('.addBookButton');
const addContainer = document.querySelector('.addBookContainer')
const submitButton = document.querySelector('.submitButton')
const Book = (author, title, pages) => {

}

const addBook = () => {

}

const displayBooks = () => {

}

addButton.addEventListener('click', () => {
    addContainer.style.visibility = 'visible'
})

submitButton.addEventListener('click', () => {
    addContainer.style.visibility = 'hidden'
})

// document.body.onclick = function(e){
//       addBookContainer.style.visibility = 'hidden';
// }



const height = document.body.scrollHeight; 
console.log(height); 