import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from '../styles/NewBook.module.scss';
import { addBook } from '../redux/books/booksSlice';

const NewBook = () => {
  const val = Math.random() * 1000;
  const [newBook, setNewBook] = useState({
    item_id: val.toString(),
    title: '',
    author: '',
    category: 'Nonfiction',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue="title"
          placeholder="Book title"
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <select
          name="author"
          id="lang"
          defaultValue="author"
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        >
          <option value="Biftu Girma">Biftu Girma</option>
          <option value="Bereket Degu">Bereket Degu</option>
          <option value="Robert Kiyosaki">Robert Kiyosaki</option>
          <option value="Marcus R.">Marcus R.</option>
        </select>
        <input type="submit" value="Add New Book" />
      </form>
    </div>
  );
};

export default NewBook;

// NewBook.defaultProps = { books: {} };
// NewBook.propTypes = { books: PropTypes.arrayOf(PropTypes.string) };
