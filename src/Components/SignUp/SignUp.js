import React from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';

class SignUp extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			firstName:'',
			lastName:'',
			email:'',
			password:'',
			confirmPassword:''
		}
	}
	render(){
		return(
			<div className='sign-up'>
				<h1 className='title'>Register</h1>
				<p className='sub-title'>You can register or simply signIn with google</p>
				<form onSubmit={this.handleSubmit} className='sign-in-form'>
					<FormInput
						name='firstName'
						type="text" 
						value={this.state.firstName}
						handleChange={this.handleChange} 
						required
						label='FirstName'
					/>
					<FormInput
						name='lastName'
						type="text" 
						value={this.state.lastName}
						handleChange={this.handleChange} 
						required
						label='LastName'
					/>
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
						required
						label='Password'
					/>
					
					<FormInput
						name='confirmPassword'
						type="password"
						value={this.state.confirmPassword}
						handleChange={this.handleChange}
						label='Confirm Password'
						required
					/>		
				</form>
			</div>
			)
	}
}

export default SignUp;