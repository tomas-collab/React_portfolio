import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { ProfileHome } from './views/Home';
import { ProfileNav } from './component/Navbar';
import { ProfileFooter } from './component/Footer';
import { ProfileProject } from './views/Projects';

function App() {
  return (
    <div className="App">
      <ProfileNav/>
      <Router>
          <Switch>
              <Route path='/' exact render={(routerProps)=><ProfileHome {...routerProps}/>} />
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
