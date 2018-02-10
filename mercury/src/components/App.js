import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Statistics from './pages/Statistics/Statistics';
import Users from './pages/Users/Users';
import Workflow from './pages/Workflow/Workflow';
import Calendar from './pages/Calendar/Calendar';
import UserRoute from './routes/UserRoute';


class  App extends Component{
    render() {
        return(
            <div>
                <div className="App">
                    <Route  path="/login" component={Login} />
                    <UserRoute exact path="/" component={Home} />
                    <UserRoute  path="/statistics" component={Statistics} />
                    <UserRoute  path="/users" component={Users} />
                    <UserRoute  path="/workflow" component={Workflow} />
                    <UserRoute  path="/calendar" component={Calendar} />
                </div>
            </div>
        );
    }
}

export default App;