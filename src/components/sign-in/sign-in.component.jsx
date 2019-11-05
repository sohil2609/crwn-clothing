import React, { useState } from  'react';
import "./sign-in.styles.scss";
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utilities';
import { auth } from '../../firebase/firebase.utilities';

export const SignIn = () => {

    const [userCredentials, setCredentials] = useState({email: "", password: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = userCredentials;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    label="Email" 
                    type="email"
                    value={userCredentials.email} required 
                    handleChange={handleChange}></FormInput>
                <FormInput 
                    name="password" 
                    type="password"
                    value={userCredentials.password} 
                    handleChange={handleChange} required 
                    label="password"></FormInput>
                <div className="action-container">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}