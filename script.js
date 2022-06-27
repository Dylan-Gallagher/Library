let myLibrary = [];

// Object constructor for new books
function Book(title, pages, author) {
    this.title = title;
    this.pages = pages;
    this.author = author;
}

// Adding event listener to NEW BOOK button
const element = document.getElementById("newBookButton");
element.addEventListener("click", addBookToLibrary);

// Function to add new book to myLibrary
let listNumber = 0;

function addBookToLibrary() {
    let title = prompt('Title of book');
    let pages = prompt('How many pages does it have?');
    let author = prompt('What author wrote it?');
    let newBook = new Book(title, pages, author);
    myLibrary.push(newBook);

    updateList();
}

function updateList() {
    newRow(myLibrary[listNumber].title, myLibrary[listNumber].pages, myLibrary[listNumber].author);
}

const table = document.getElementById('bookTable');

function newRow(title, pages, author) {
    let newRow = table.insertRow();
    newRow.setAttribute('id', title);
    let newCell = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);
    let newCell4 = newRow.insertCell(4);

    let newText = document.createTextNode(title);
    newCell.appendChild(newText);

    let newText1 = document.createTextNode(pages);
    newCell1.appendChild(newText1);

    let newText2 = document.createTextNode(author);
    newCell2.appendChild(newText2);

    let readToggle = document.createElement("input");
    readToggle.setAttribute('type', 'checkbox');
    newCell3.appendChild(readToggle);

    let removeButtonButton = document.createElement("button");
    newCell4.appendChild(removeButtonButton);
    removeButtonButton.innerHTML = "REMOVE";
    removeButtonButton.setAttribute('id', listNumber);
    
    removeButtonButton.onclick = function() {
        document.getElementById(title).remove();
    }


    listNumber++;
}













