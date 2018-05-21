import React, { Component } from 'react'
import {connect} from 'react-redux'
import Book from './Book'


class ReadLater extends Component {

  render() {
    if(!this.props.ReadLater)
    return (
      <h2>No Books Added Yet To The ReadLater List</h2>
    );
    //otherwise
    return(
      <div>
          <Book BookItem={this.props.ReadLater}/>
        </div>
    )
  }
}
const mapStateToProps=state=>({
  ReadLater:state.ReadLater.Item
})
export default connect(mapStateToProps)(ReadLater)
