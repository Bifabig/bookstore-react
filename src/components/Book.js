import PropTypes from 'prop-types';
import styles from '../styles/Book.module.scss';

const Book = ({ book }) => (
  <div className={styles.book}>
    <div className={styles.desc}>
      <h3>{book.genre}</h3>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <ul>
        <li>Comments</li>
        <span className={styles.verticalLine} />
        <li>Remove</li>
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

Book.defaultProps = { book: {} };
Book.propTypes = { book: PropTypes.objectOf(PropTypes.string) };

export default Book;
