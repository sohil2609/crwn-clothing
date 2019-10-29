import React from 'react';
import "./sign-up.styles.scss";
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities';

export class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password, displayName, confirmPassword } = this.state;
        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch(error) {
            console.error(error)
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        label="Name" 
                        value={this.state.displayName} required 
                        handleChange={this.handleChange}></FormInput>
                    <FormInput 
                        name="email" 
                        type="email"
                        label="Email" 
                        value={this.state.email} required 
                        handleChange={this.handleChange}></FormInput>
                    <FormInput 
                        name="password" 
                        label="Password" 
                        type="password"
                        value={this.state.password} required 
                        handleChange={this.handleChange}></FormInput>
                    <FormInput
                        name="confirmPassword" 
                        type="password"
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange} required 
                        label="Confirm Password"></FormInput>
                    <div className="action-container">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
