import './App.css';
import { Route, Switch } from 'react-router-dom';
import Button from './components/Button/Button';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className='App'>
      <Layout>
        <h1>This is HomePage</h1>
        {
          // <Switch>
          //   <Route path='/signin' component={SigninPage}/>
          // </Switch>
        }
        <Button />
      </Layout>
    </div>
  );
}

export default App;
