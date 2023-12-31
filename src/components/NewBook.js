import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/NewBook.module.scss';
import { postBookItems } from '../redux/books/booksSlice';

const NewBook = () => {
  const [newBook, setNewBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'Nonfiction',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.item_id !== '') dispatch(postBookItems(newBook));
    setNewBook({
      item_id: '',
      title: '',
      author: '',
      category: 'Nonfiction',
    });
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={newBook.title}
          className={styles.title}
          onChange={(e) => setNewBook({
            ...newBook,
            title: e.target.value,
          })}
        />
        <select
          name="author"
          id="lang"
          value={newBook.author}
          className={styles.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        >
          <option value="" disabled> Author </option>
          <option value="Biftu Girma">Biftu Girma</option>
          <option value="Bereket Degu">Bereket Degu</option>
          <option value="Robert Kiyosaki">Robert Kiyosaki</option>
          <option value="Marcus R.">Marcus R.</option>
        </select>
        <input
          type="submit"
          value="Add New Book"
          className={styles.submit}
          onClick={
          () => setNewBook({
            ...newBook,
            item_id: (Math.random() * 1000).toString(),
          })
}
        />
      </form>
    </div>
  );
};

export default NewBook;
