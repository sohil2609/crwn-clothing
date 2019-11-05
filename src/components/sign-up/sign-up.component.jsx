import React, {useState} from 'react';
import "./sign-up.styles.scss";
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities';

export const SignUp = () => {

    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { email, password, displayName, confirmPassword } = userCredentials;


    const handleSubmit = async event => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setCredentials({
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

    const handleChange = (e) => {
        const { value, name } = e.target;
        setCredentials({...userCredentials, [name]: value})
    }

    return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        label="Name" 
                        value={displayName} required 
                        handleChange={handleChange}></FormInput>
                    <FormInput 
                        name="email" 
                        type="email"
                        label="Email" 
                        value={email} required 
                        handleChange={handleChange}></FormInput>
                    <FormInput 
                        name="password" 
                        label="Password" 
                        type="password"
                        value={password} required 
                        handleChange={handleChange}></FormInput>
                    <FormInput
                        name="confirmPassword" 
                        type="password"
                        value={confirmPassword} 
                        handleChange={handleChange} required 
                        label="Confirm Password"></FormInput>
                    <div className="action-container">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
}
