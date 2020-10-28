import React from 'react';
import './SignIn.scss';
import {signInWithGoogle} from '../../Firebase/Firebase';
import FormInput from '../FormInput/FormInput';

class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email:'',
			password:''
		}
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		this.setState({
			email:'',
			password:''		
		})
	}	
	

	handleChange=(e)=>{
		// console.log(e.target.value);
		// console.log(e.target.name);
		const {value,name} = e.target;

		this.setState({[name]:value});
	}

	render(){
		return(
			<div className='sign-in'>
				<h1 className='title'>SignIn Form</h1>
				<p className='sub-title'>Already have an account or signIn With Google</p>
				<form onSubmit={this.handleSubmit} className='sign-in-form'>
					<FormInput
						name='email'
						type="email" 
						value={this.state.email}
						handleChange={this.handleChange} 
						required
						label='Email'
					/>
					
					<FormInput
						name='password'
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label='Password'
						required
					/>	
					<input type="submit" onClick={signInWithGoogle}/>	
				</form>
			</div>
			)
	} 
};
export default SignIn;

// <button type='submit'>SignIn</button>
// <button onClick={signInWithGoogle}>SignInWithGoogle</button>