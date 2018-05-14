import {FETCH_BOOKS} from '../actions';
const Books=(state=[],action)=>
{
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,Items:action.BookList
      };
    default:
      return state;
  }
}
export default Books
