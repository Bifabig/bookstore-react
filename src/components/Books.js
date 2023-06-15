import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import styles from '../styles/Books.module.scss';
import { getBookItems } from '../redux/books/booksSlice';
import NewBook from './NewBook';

const Books = () => {
  // let fetchedBooks = [];
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (isLoading) <h1>Loading...</h1>;

  if (error) <h2>Something went wrong</h2>;

  return (
    <div className={styles.booksContainer}>
      <div className={styles.books}>
        {books !== '' ? (
          books.map((book) => Object.keys(book).map((key) => {
            const position = book[key];
            const bookObj = {
              book: position[0],
              itemId: key,
            };
            return <Book key={key} book={bookObj.book} itemId={bookObj.itemId} />;
          }))
        ) : (
          <h2>No Books To Display</h2>
        )}

        <hr />
        <NewBook />
      </div>
    </div>
  );
};

export default Books;
