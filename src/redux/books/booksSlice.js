import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/whXUTbsgANv3pP1bZNc6/books';
// const bookItems = [
//   {
//     item_id: 'item1',
//     title: 'The Great Gatsby',
//     author: 'John Smith',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item2',
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item3',
//     title: 'The Selfish Gene',
//     author: 'Richard Dawkins',
//     category: 'Nonfiction',
//   },
// ];
const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const getBookItems = createAsyncThunk(
  'books/getBookItems',
  async (thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const delBookItems = createAsyncThunk(
  'books/delBookItems',
  async (book, thunkAPI) => {
    try {
      const resp = await axios.delete(`${url}/${book}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postBookItems = createAsyncThunk(
  'books/postBookItems',
  async (book, thunkAPI) => {
    try {
      const resp = await axios.post(url, {
        item_id: book.item_id,
        title: book.title,
        author: book.author,
        category: book.category,
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.books.map((book)=> Object.keys(book).map((key) => {
        //   const position = book[key];
        //   const bookObj = {
        //     book: position[0],
        //     itemId: key,
        //   };
        //   state.books = [...bookObj.book, key];
        // }))
        state.books = [...state.books, action.payload];
      })
      .addCase(getBookItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postBookItems.fulfilled, (state, action) => {
        state.books = [...state.books, action.meta.arg];
        console.log(state.books);
      })
      .addCase(delBookItems.fulfilled, (state) => {
        console.log(state.books);
        // state.books = state.books.filter((book) => book.item_id !== action.meta.arg);
        // state.books.push(action.meta.arg);
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
