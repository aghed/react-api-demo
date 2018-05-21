import {combineReducers } from 'redux'
import Books from './booksReducer'
import Book from './bookByIdReducer'
import ReadLater from './ReadLaterReducer'
import { routerReducer} from 'react-router-redux'
export default combineReducers({
  Books,
  Book,
  ReadLater,
})
