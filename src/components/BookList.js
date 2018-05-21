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
  render() {
      if(!this.props.Booklist)
      return (
        <div className="row">
          <img src="https://cdn.dribbble.com/users/359314/screenshots/2379673/untitled-3.gif" />
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
            
          </div>
          </div>
      );
  }

}
const mapStateToProps=state=>
  ({
    Booklist:state.Books.Items
  })

export default connect(mapStateToProps)(BookList)
