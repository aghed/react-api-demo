import React, { Component } from 'react'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import BookList from './components/BookList'
import ReadLater from './components/ReadLater'
import NavBar from './components/NavBar'
import './index.css'
import { Router, Route } from 'react-router'
import { routerMiddleware,ConnectedRouter } from 'react-router-redux'
import { Link,BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

export const store=createStore(rootReducer)
console.log(store.getState())
class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="row">

          <BrowserRouter>
            <div className="col-sm-12">
              <NavBar />
              <Route exact path="/" component={BookList} />
              <Route exact path="/readlater" component={ReadLater} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
    );
  }
}

export default App;
