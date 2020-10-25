import './App.css';
import { Route, Switch } from 'react-router-dom';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='App'>
      <h1>This is HomePage</h1>
      {
        // <Switch>
        //   <Route path='/signin' component={SigninPage}/>
        // </Switch>
      }
      <Button />
    </div>
  );
}

export default App;
