import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNewsByCountry } from './newsAPI';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (country, thunkAPI) => {
    const articles = await fetchNewsByCountry(country);
    return articles;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    visibleCount: 9,
    loading: false,
    error: null,
  },
  reducers: {
    loadMore: (state) => {
      state.visibleCount += 9;
    },
    resetVisibleCount: (state) => {
      state.visibleCount = 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { loadMore, resetVisibleCount } = newsSlice.actions;

export default newsSlice.reducer;
