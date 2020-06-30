import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// Redux 
import {Provider } from 'react-redux';
import store from './store';

import Test from './components/Test/Form';
import HomePage from './components/home/Home';
import MainPage from './components/main/Main';
import ProfilePage from './components/profile/Profile';
import FeedPage from './components/feed/Feed';
import SearchPage from './components/search/Search';
import './App.css';
import NavBar from './components/nav/Nav';
import LoginTest from './components/Test/LoginForm';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default class BasicExample extends Component {
  render() {
    return (
        <React.Fragment>
          <Provider store={store}>
          <NavBar />
          <Router>
            <div>
              <Switch>
                <Route exact path="/main">
                  <MainPage />
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/feed">
                  <FeedPage />
                </Route>
                <Route path="/search">
                  <SearchPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
                <Route path="/test">
                  <Test />
                </Route>
                <Route path="/test2">
                  <LoginTest />
                </Route>
              </Switch>
            </div>
          </Router>
          </Provider>
        </React.Fragment>
        //React.Fragment allows it to compile.
    )
  }
}

// You can think of these components as "pages"
// in your app.


