import {ADD_TO_READ_LATER,FETCH_READ_lATER_BOOKS} from '../actions'

const ReadLater=(state=[],action)=>
{
  switch (action.type) {
    case ADD_TO_READ_LATER:
      return{
        ...state,Item:action.Book
      }
    case FETCH_READ_lATER_BOOKS:
    return state;  
    default:
      return state;
  }
}
export default ReadLater
