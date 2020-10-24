import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignInSignUpPage from './Pages/SignInSignUpPage/SignInSignUpPage';

function App() {
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

export default App;
