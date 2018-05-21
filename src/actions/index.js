import { BOOKS_URL } from '../constants'
export const FETCH_BOOKS="FETCH_BOOKS"
export const FETCH_BOOK_BY_ID="FETCH_BOOK_BY_ID"
export const ADD_TO_READ_LATER="ADD_TO_READ_LATER"
export const FETCH_READ_lATER_BOOKS="FETCH_READ_lATER_BOOKS"

export const fetchBooks= dispatch =>
{
  fetch(BOOKS_URL)
  .then(res=>res.json())
  .then(data=>dispatch({
    type:FETCH_BOOKS,
    BookList:data
  }))
}

export const fetchBookById=(BookId,dispatch)=>
{
  fetch(BOOKS_URL+'/'+BookId)
  .then(res=>res.json())
  .then(data=>dispatch({
    type:FETCH_BOOK_BY_ID,
    Book:data
  }))
}
export const addToReadlater=(Book,dispatch)=>
dispatch({
    type:ADD_TO_READ_LATER,
    Book
  })

export const fetchReadlater=dispatch=>
dispatch({
  type:FETCH_READ_lATER_BOOKS

})
