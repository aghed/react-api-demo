import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getImageUrl} from '../constants'
class BookDetail extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      ImageUrl:''
    }
  }
  render() {
    let Book={};
    if(this.props.Book)
      {
        Book=this.props.Book;
        getImageUrl(this.props.Book.ID).then(res=>this.setState({ImageUrl:res}));
      }
      else {
        return (
          <div>
            <h2>Select A Book</h2>
          </div>
        );
      }
    return(
      <div className="card" >
        <img src={this.state.ImageUrl} className="card-img-top" alt="loading...." />
        <div className="card-img-overlay">
          <h4 className="card-title">{Book.title}</h4>
        </div>
          <div className="card-body">
            <b>Title:</b> <p className="card-text">{Book.Title}</p>
            <b>PageCount:</b> <p className="card-text">{Book.PageCount}</p>
            <b>PublishDate:</b> <p className="card-text">{Book.PublishDate}</p>
            <b>Description:</b> <p className="card-text">{Book.Description}</p>
            <b>Excerpet:</b> <p className="card-text">{Book.Excerpt}</p>
          </div>
      </div>
    )
  }

}
const mapStateToProps=state=>({
  Book:state.Book.Item
})
export default connect(mapStateToProps)(BookDetail)
