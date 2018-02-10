import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginCard from './../../pages/Login/LoginCard'
import LoginForm from './../../forms/LoginForm';
import { login } from './../../../actions/auth';
import './Login.css'

class Login extends React.Component {
    submit = data =>
        this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        return (
            <div className="login-page">
                <div className="ui container">
                    <LoginCard/>
                    <LoginForm submit={this.submit}/>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};


export default connect(null, {login})(Login);