import {combineReducers } from 'redux'
import Books from './booksReducer'
import Book from './bookByIdReducer'
import ReadLater from './ReadLaterReducer'
export default combineReducers({
  BookList:Books,
  Book:Book ,
  ReadLater:ReadLater
})
