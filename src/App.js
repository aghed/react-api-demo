import React, { Component } from 'react'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import ReadLater from './components/ReadLater'
import { Switch,Route,IndexRoute,Router} from 'react-router'
import {BrowserRouter,Link} from 'react-router-dom'

export const store=createStore(rootReducer)
class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <BrowserRouter>
            <Link to="/" class="nav-link active">Home</Link>
            </BrowserRouter>
          </li>
          <li className="nav-item">
            <BrowserRouter>
            <Link to="/readLater">ReadLaterList</Link>
            </BrowserRouter>
          </li>
        </ul>
        <div className="row">
          <div className="col-sm-12">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={BookList} />
              <Route exact path="/readlater" component={ReadLater} />
            </Switch>
          </BrowserRouter>
          </div>
        </div>
      </div>
    </Provider>
    );
  }
}

export default App;
