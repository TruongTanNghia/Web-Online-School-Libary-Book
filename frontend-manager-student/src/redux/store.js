//! LIBRARY
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

//! SHARE
import CONSTANTS from 'configs/constants';

//! DATA TOOLKIT
import AuthenticationSlice from './student/authentication_slice/auth_slice';
import CONFIGS from 'configs/configs';
import BookSlice from './student/book_slice/book_slice';
import MediaSlice from './media/upload_remove_media/media_slice';
import BorrowBookSlice from './student/borrow_book_slice/borrow_slice';
import RatingSlice from './student/rating_slice/rating_slice';
import FavoriteSlice from './student/favorite_slice/favorite_slice';
import CommentSlice from './student/comment_slice/comment_slice';
const rootReducer = (state, action) => {
  return AuthenticationSlice(state, action);
};

const store = configureStore({
  reducer: {
    auth_student: AuthenticationSlice,
    book: BookSlice,
    borrow: BorrowBookSlice,
    media: MediaSlice,
    rating: RatingSlice,
    favorite: FavoriteSlice,
    comment: CommentSlice,
    reducer: rootReducer,
  },
  middleware:
    CONFIGS.REACT_APP_NODE_ENV !== CONSTANTS.REACT_ENV_PR
      ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: CONFIGS.REACT_APP_NODE_ENV !== CONSTANTS.REACT_ENV_PR,
});

export default store;
