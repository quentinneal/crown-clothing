import React, { useState } from "react";
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Firebase config file
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials ] = useState({ email: '', password: '' })

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    

    emailSignInStart(email, password);

    
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({...userCredentials, [name]: value });
  };

  return(
    <div className="sign-in">
      <div className="sign-in-text">
        <div className="sign-in-title">I already have an account</div>
        <div className="sign-in-description">Sign in with your email and password</div>
      </div>
      <form className="sign-in-form" onSubmit={handleSubmit}>

        <FormInput 
        name="email" 
        type="email" 
        handleChange={handleChange} 
        value={email}
        label="Email"
        required 
        />
        
        <FormInput 
        name="password" 
        type="password" 
        value={password}
        label="Password"
        handleChange={handleChange}
        required 
        />
        
        <div className="custom-button-container">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton 
          type="button" 
          onClick={googleSignInStart} 
          isGoogleSignIn
          >
          Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);