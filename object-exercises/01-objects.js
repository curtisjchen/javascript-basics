// first draft
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const printTitle = this.title;
        const printAuthor = " by ".concat(this.author);
        const printPages = ", ".concat(String(this.pages)).concat(" pages");
        let printRead = ""
        if (this.read) {
            printRead = ", read";
        } else {
            printRead = ", not read yet";
        }
        return printTitle.concat(printAuthor).concat(printPages).concat(printRead);
    }
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 295, false)
console.log(book1.info())


// optimized code
function OptBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const printAuthor = ` by ${this.author}`;
        const printPages = `, ${this.pages} pages`;
        const printRead = this.read ? ", read" : ", not read yet";
        
        return `${this.title}${printAuthor}${printPages}${printRead}`;
    }
}

const book2 = new OptBook('The Hobbit', 'J.R.R Tolkien', 295, false);
console.log(book1.info());
