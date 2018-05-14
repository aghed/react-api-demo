import {FETCH_BOOK_BY_ID} from '../actions'
const Book=(state=[],action)=>
{
  switch (action.type) {
    case FETCH_BOOK_BY_ID:
        return {
          ...state,Item:action.Book
        };
    default:
        return state;
  }
}
export default Book
