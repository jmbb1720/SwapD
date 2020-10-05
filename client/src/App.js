import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav_bar from "./components/nav_bar";
import Top_bar from "./components/top_bar";
import Home from "./components/home";
import Tennis from "./components/tennis";
import Footer from "./components/footer";
import Submission from "./components/submission";
import Register from "./components/register";
import Login from "./components/login";
import Arts_Studio from './components/arts_studio';
import Sports_Tennis from './components/sports_tennis';
import Tech_Program from './components/tech_program';
import User_Info from './components/user_info';
import User_Info_Update from './components/user_info_update';
import Post from './components/post';
// import './App.css';
import './mysass.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Top_bar />
        <Nav_bar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/submit" exact component={() => <Submission />} />
          <Route path="/tennis" exact component={() => <Tennis />} />
          <Route path="/arts-studio" exact component={() => <Arts_Studio />} />
          <Route path="/sports-tennis" exact component={() => <Sports_Tennis />} />
          <Route path="/tech-program" exact component={() => <Tech_Program />} />
          <Route path="/user-info" exact component={() => <User_Info />} />
          <Route path="/user-info-update" exact component={() => <User_Info_Update />} />
          <Route path="/post" exact component={() => <Post />} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
