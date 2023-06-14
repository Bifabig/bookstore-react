import { useSelector } from 'react-redux';
import Book from './Book';
import styles from '../styles/Books.module.scss';
import NewBook from './NewBook';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <div className={styles.booksContainer}>
      <div className={styles.books}>
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
        <hr />
        <NewBook />
      </div>
    </div>
  );
};

export default Books;
