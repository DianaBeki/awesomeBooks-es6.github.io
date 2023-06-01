class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.addForm = document.getElementById('addForm');
    this.addForm.addEventListener('submit', this.addBook.bind(this));
    this.displayBooks();
  }

  addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
    event.target.reset();
  }

  removeBook(index) {
    this.books = this.books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>"${book.title}" by ${book.author}</td>
      `;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });

      removeBtn.classList.add('removeBtn');
      tr.appendChild(removeBtn);
      this.bookList.appendChild(tr);
    });
  }
}

const bookCollection = new BookCollection();

bookCollection();