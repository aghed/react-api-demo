import React, { Component } from 'react'
import {connect} from 'react-redux'
import Book from './Book'
class ReadLater extends Component {
  render() {
    return(
      <div>
        {this.props.ReadLater.map(BookItem=>{
          <Book BookItem={BookItem}/>
        })}
      </div>
    )
  }
}
const mapStateToProps=state=>({
  ReadLater:state.ReadLater
})
export default connect()(ReadLater)
