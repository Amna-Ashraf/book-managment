const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetElement = document.getElementById(this.dataset.target);

    targetElement.scrollIntoView({ behavior: 'smooth' });

  });
});
    
    let books = [];

function addBook(title, author, genre) {
  const newBook = {
    title: title,
    author: author,
    genre: genre
  };
  books.push(newBook);
  displayBooks();
}

function removeBook(title) {
  books = books.filter(book => book.title !== title);
  displayBooks();
}

function displayBooks() {
  const bookListDiv = document.getElementById('bookList');
  bookListDiv.innerHTML = ''; 

  books.forEach(book => {
    const bookItem = document.createElement('p');
    bookItem.textContent = `${book.title} by ${book.author} - ${book.genre}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      removeBook(book.title);
    };

    bookItem.appendChild(removeButton);
    bookListDiv.appendChild(bookItem);
  });
}

const bookForm = document.getElementById('bookForm');

bookForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const genreInput = document.getElementById('genre');

  const title = titleInput.value;
  const author = authorInput.value;
  const genre = genreInput.value;

  addBook(title, author, genre);

  titleInput.value = '';
  authorInput.value = '';
  genreInput.value = '';
});