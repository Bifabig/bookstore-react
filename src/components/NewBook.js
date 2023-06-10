import styles from '../styles/NewBook.module.scss';

const NewBook = () => (
  <div>
    <h2>Add New Book</h2>
    <form className={styles.form}>
      <input type="text" placeholder="Book title" />
      <select name="languages" id="lang">
        <option value="" disabled>
          Category
        </option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
      <input type="submit" value="Add New Book" />
    </form>
  </div>
);

export default NewBook;
