import React from 'react';
import {fetchBookById} from '../actions'
import {store} from '../App'
import {getImageUrl} from '../constants'

import {addToReadlater} from '../actions'
export default class Book extends React.Component {
  constructor(props)
  {
    super(props);

      this.state={
        ImageUrl:''
      }
  }
  componentDidMount()
  {
    getImageUrl(this.props.BookItem.ID).then(res=>this.setState({ImageUrl:res}))
  }
  render() {
    const Book=this.props.BookItem;
    return (
    <div className="card" onClick={()=>fetchBookById(Book.ID,store.dispatch)}>
      <img src={this.state.ImageUrl} className="card-img-top" alt="loading...." />
      <div className="card-img-overlay">
        <h4 className="card-title">{Book.title}</h4>
      </div>
        <div className="card-body">
          <p className="card-text">{Book.Description.substring(0,80)+'....'}</p>
          <button type="button" className="btn btn-warn" onClick={this.addtoReadMe(Book)}>Add To Read Later</button>
        </div>
    </div>);

  }
  addtoReadMe(Book)
  {
    addToReadlater(Book,store.dispatch);
  }
}
