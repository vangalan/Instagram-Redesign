import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
<<<<<<< HEAD
import HomePage from './pages/home/Home';
import ProfilePage from './pages/profile/Profile'
import FeedPage from './pages/feed/Feed';
import SearchPage from './pages/search/Search';
import Test from './pages/test/Test';
=======
import HomePage from './components/home/Home';
import ProfilePage from './components/profile/Profile';
import FeedPage from './components/feed/Feed';
import SearchPage from './components/search/Search';
>>>>>>> fb2db3a0875e31b126ec6e92bbed898e4e874cff
import './App.css';
import NavBar from './components/nav/Nav';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {

  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
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
<<<<<<< HEAD
            <Route path="/test">
              <Test />
            </Route>
          </Switch>  
    </>
=======
          </Switch>
        </div>
      </Router>
    </React.Fragment>
    //React.Fragment allows it to compile.
>>>>>>> fb2db3a0875e31b126ec6e92bbed898e4e874cff
  );
}

// You can think of these components as "pages"
// in your app.


