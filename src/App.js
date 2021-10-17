import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { ProfileHome } from './views/Home';
import { ProfileNav } from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <ProfileNav/>
        <Switch>
        <Route path='/' exact render={(routerProps)=><ProfileHome {...routerProps}/>} />
       </Switch>
      </Router>
      
    </div>
  );
}

export default App;
