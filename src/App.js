import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileNav from './component/Navbar'
import Profile from './component/Profile'
import SocialMedia from './component/SocialMedia';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Thankyou from './component/Thankyou';


function App() {
  
  return (
  <Router>
    <div className="app fluid">
     <ProfileNav />
     <SocialMedia/>
     <Switch>
     <Route path="/thankyou" exact render={(routerProps) =><Thankyou {...routerProps} />}></Route> 
     <Route  path="/" exact render={(routerProps) =><Profile {...routerProps} />}></Route> 
     </Switch>
    </div>
  </Router>
  );
}

export default App;
