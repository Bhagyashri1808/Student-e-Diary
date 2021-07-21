import './App.scss';
import LoginForm from './features/events/login/LoginForm';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Menu from './features/events/menu/Menu';
import { AppProvider } from './utils/AppContext';
import PrivateRoute from './features/events/structure/PrivateRoute';
import UserManagement from './features/events/menu/user-management/UserManagement';

const App = () => (
  <Router>
  <AppProvider>
    <Switch>
    <Route path='/' component={LoginForm} exact/>
    <PrivateRoute path='/menu' component={Menu}/>
    <PrivateRoute path='/user-management' component={UserManagement}/>
    <Redirect to='/' /> 
    </Switch>
  </AppProvider>
  </Router>
  //return <LoginForm />;
)

export default App;
