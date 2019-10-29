import React from  'react';
import "./sign-in.styles.scss";
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utilities';

export class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        label="Email" 
                        type="email"
                        value={this.state.email} required 
                        handleChange={this.handleChange}></FormInput>
                    <FormInput 
                        name="password" 
                        type="password"
                        value={this.state.password} 
                        handleChange={this.handleChange} required 
                        label="password"></FormInput>
                    <div className="action-container">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}