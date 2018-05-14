import React from 'react';
import { fetchBooks } from '../actions'
import {connect} from 'react-redux'
import Book  from './Book'
import BookDetail from './BookDetail'
class BookList extends React.Component {

  componentWillMount()
  {
    fetchBooks(this.props.dispatch);
  }
  constructor(props)
  {
    super(props);
    console.log(props);
  }
  render() {
      if(!this.props.Booklist)
      return (
        <div className="container">
          <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" className="center img-rounded"/>
        </div>
    );
      const Items=this.props.Booklist.slice(0,20).map(
        BookItem=>(
          <div key={BookItem.ID}>
          <Book BookItem={BookItem} />
          </div>
        )
    );
      return (
        <div className="row">
            <div className="col-sm-8">
              <h1 className="text-success">Book List</h1>
              <hr/>  
              <div className="card-columns">
                {Items}
              </div>
            </div>
          <div className="col-sm-4">
            <h1 className="text-info">Book Details</h1>
            <hr/>
            <BookDetail/>
          </div>
          </div>
      );
  }

}
const mapStateToProps=state=>
({
  Booklist:state.BookList.Items
})
export default connect(mapStateToProps)(BookList)
