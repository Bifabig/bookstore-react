import Book from './Book';
import styles from '../styles/Books.module.scss';
import NewBook from './NewBook';

const Books = () => {
  const books = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div className={styles.booksContainer}>
      <div className={styles.books}>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <hr />
        <NewBook />
      </div>
    </div>
  );
};

export default Books;
