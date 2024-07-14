var favoriteBooks = [];
// TODO: define addFavoriteBook(..) function

const addFavoriteBook = (bookName) => {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
};

// TODO: define printFavoriteBooks() function

const printFavoriteBooks = () => {
  console.log(
    `Favorite Books: .. ${favoriteBooks.length} and books are ${favoriteBooks}`
  );
};

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();

// TODO: print out favorite books
