import React from 'react';
import  { Form, Button } from  'semantic-ui-react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    state = {
        data: {
            username: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = (e) => {
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if (Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }

        e.preventDefault();
        const { history } = this.props;
        let username = JSON.parse(localStorage.getItem("username")),
            password = JSON.parse(localStorage.getItem("password"));

        if (username === this.state.username && password === this.state.password) {
            this.setState ({
                username: '',
                password: '',
            });

            history.push('/');
        } else if (!(username === this.state.username)) {}
    };

    validate = data => {
        const errors = {};
        if (!data.username) errors.username = "Can\'t be blank";
        if (!data.password) errors.password = "Can\'t be blank";
        return errors;
    };

    render() {
        const { data, errors } = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.username}>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={data.username}
                    onChange={this.onChange}
                    />
                    {errors.username && alert('Can\'t be blank')}
                </Form.Field>

                <Form.Field error={!!errors.password}>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>

                <Button className="btn-enter">Enter</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;