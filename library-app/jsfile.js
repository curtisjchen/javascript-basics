const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <p><strong>${book.title}</strong></p>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not read yet'}</p>
            <button onclick="toggleReadStatus(${index})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        booksContainer.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}

document.getElementById('new-book-btn').addEventListener('click', () => {
    document.getElementById('form-container').classList.toggle('hidden');
});

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
    document.getElementById('book-form').reset();
    document.getElementById('form-container').classList.toggle('hidden');
});

// Example books for initial display
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('1984', 'George Orwell', 328, true);
displayBooks();
