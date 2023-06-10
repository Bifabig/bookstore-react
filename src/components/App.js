import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import Navbar from './Navbar';
import '../styles/App.module.scss';
import Categories from './Categories';

const BookstoreApp = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Route>
  </Routes>
);

export default BookstoreApp;
