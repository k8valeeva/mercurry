import React from 'react';
import  { Form, Button } from  'semantic-ui-react';

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

    onSubmit = (e) =>{
        e.preventDefault();
        const { history } = this.props;
        let username = JSON.parse(localStorage.getItem("username")),
            pass = JSON.parse(localStorage.getItem("password"));

        if (username === this.state.username && pass === this.state.password) {
            this.setState ({
                username: '',
                password: '',
            });
            history.push('/');
        } else if (!(username === this.state.username)) {}

        else {
            alert('information is not correct')
        }
    };

    render() {
        const { data } = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={data.username}
                    onChange={this.onChange}
                    />
                </Form.Field>

                <Form.Field>
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

export default LoginForm;