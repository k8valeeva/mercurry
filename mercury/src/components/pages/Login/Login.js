import React from 'react';
import './Login.css'
import LoginCard from './../../pages/Login/LoginCard'
import LoginForm from './../../forms/LoginForm';

class Login extends React.Component {

    render() {
        return(
            <div className="login-page">
                <div className="ui container">
                    <LoginCard/>
                    <LoginForm/>
                </div>

            </div>
        );
    }
}

export default Login;