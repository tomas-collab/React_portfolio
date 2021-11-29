import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileNav from './component/Navbar'
import Profile from './component/Profile'
import Projects from './component/Project'
import ContactMe from './component/Contact'
import SocialMedia from './component/SocialMedia';

function App() {
  return (
    <div className="app">
     <ProfileNav/>
     <SocialMedia/>
     <div className='sections'>
        <Profile/>
        <Projects/>
        <ContactMe/>
     </div>
    </div>
  );
}

export default App;
