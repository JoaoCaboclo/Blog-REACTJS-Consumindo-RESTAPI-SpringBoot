import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListPostComponent from "./component/post/ListPostComponent";
import AddPostComponent from "./component/post/AddPostComponent";
import EditPostComponent from "./component/post/EditPostComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React Blog Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListPostComponent} />
                      <Route path="/posts" component={ListPostComponent} />
                      <Route path="/add-post" component={AddPostComponent} />
                      <Route path="/edit-post" component={EditPostComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
