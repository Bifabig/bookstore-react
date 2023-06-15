import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/Book.module.scss';
import { delBookItems } from '../redux/books/booksSlice';

const Book = ({ book, itemId }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.book}>
      <div className={styles.desc}>
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <ul>
          <li>Comments</li>
          <span className={styles.verticalLine} />
          <li>
            <button
              type="button"
              className={styles.removeBtn}
              onClick={() => dispatch(delBookItems(itemId))}
            >
              Remove
            </button>
          </li>
          <span className={styles.verticalLine} />
          <li>Exit</li>
        </ul>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progress}>
          <div className={styles.progressIcon}>
            <span className="material-icons">rotate_right</span>
          </div>
          <div className={styles.progressPercent}>
            <h2>64%</h2>
            <h4>Completed</h4>
          </div>
        </div>
        <span className={styles.verticalLine} />
        <div className={styles.chapter}>
          <p>Current Chapter</p>
          <h4>Chapter 17</h4>
          <button type="button" className={styles.primaryBtn}>
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.defaultProps = { book: {} };
Book.defaultProps = { itemId: '' };
Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
};
Book.propTypes = {
  itemId: PropTypes.string,
};

export default Book;
