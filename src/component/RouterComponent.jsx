import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListPostComponent from "./post/ListPostComponent";
import AddPostComponent from "./post/AddPostComponent";
import EditPostComponent from "./post/EditPostComponent";

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}>React User Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListPostComponent} />
                        <Route path="/posts" component={ListPostComponent} />
                        <Route path="/add-post" component={AddPostComponent} />
                        <Route path="/edit-post" component={EditPostComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;