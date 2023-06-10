import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import Navbar from './Navbar';
import '../styles/App.module.scss';

const BookstoreApp = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Books />} />
    </Route>
  </Routes>
);

export default BookstoreApp;
