import {ADD_TO_READ_LATER} from '../actions'

const ReadLater=(state=[],action)=>
{
  switch (action.type) {
    case ADD_TO_READ_LATER:
      return [
        ...state.ReadLater,
        {
          Book:action.Book
        }
      ];
    default:
      return state;
  }
}
export default ReadLater
