export const BASE_URL="http://fakerestapi.azurewebsites.net";
export const BOOKS_URL=BASE_URL+"/api/Books";
export const getImageUrl=id=>
{
  return fetch(BASE_URL+'/books/covers/'+id)
  .then(res=>res.json())
  .then(data=>data[0].Url)
}
