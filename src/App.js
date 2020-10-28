import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignInSignUpPage from './Pages/SignInSignUpPage/SignInSignUpPage';
import {auth} from './Firebase/Firebase';

class App extends React.Component {
	constructor(){
		super();

		this.state={
			currentState:null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
			this.setState({currentState:user})

			console.log(user);
		})
	}

	componentUnMount(){
		this.unsubscribeFromAuth();
	}

	render(){
		return (
    	<div className="App">
		     {
		      <Switch>
		        <Route path='/signin' component={SignInSignUpPage}/>
		      </Switch> 
		     }      
    	</div>
      );
	}
}

export default App;
