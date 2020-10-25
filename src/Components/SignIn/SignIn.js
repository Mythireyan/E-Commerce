import React from 'react';
import './SignIn.scss';
import {signInWithGoogle} from '../../Firebase/Firebase';

class SignIn extends React.Component {
	constructor(props
		){
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
				<h2>This is a signIn form</h2>
				<h5>You could sigIn using email and password or using google account</h5>
				<form onSubmit={this.handleSubmit} className='sign-in-form'>
					<input 
					name='email'
					type="email" 
					value={this.state.email}
					onChange={this.handleChange} 
					required
					/>
					<label htmlFor="email">Email</label>
					<input 
					name='password'
					type="password"
					value={this.state.password}
					onChange={this.handleChange}
					required
					/>
					<label htmlFor="">Password</label>
					<button type='submit'>SignIn</button>
					<button onClick={signInWithGoogle}>SignInWithGoogle</button>
				</form>
			</div>
			)
	} 
};
export default SignIn;