import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hynKeFguA12wQQ0rwNym/books';
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
        const fetchedData = [action.payload];
        const finalState = [];
        fetchedData.map((book) => Object.keys(book).map((key) => {
          const position = book[key];
          const bookObj = {
            book: position[0],
            itemId: key,
          };

          if (typeof bookObj.book === 'object') {
            finalState.push({ ...bookObj.book, item_id: bookObj.itemId });
          }
          state.books = [...finalState];

          return state.books;
        }));
      })
      .addCase(getBookItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postBookItems.fulfilled, (state, action) => {
        state.books = [...state.books, action.meta.arg];
      })
      .addCase(delBookItems.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.meta.arg);
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
