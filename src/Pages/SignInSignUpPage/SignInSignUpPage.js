import React from 'react';
import './SignInSignUpPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInSignUpPage = ()=>{
	return(
		<div className='signin-signup-page'>
			<SignIn/>
			<SignUp/>
		</div>
		)
};

export default SignInSignUpPage;