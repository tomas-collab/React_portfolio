import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileNav from './component/Navbar'
import Profile from './component/Profile'
import Projects from './component/Project'
import ContactMe from './component/Contact'

function App() {
  return (
    <div className="app">
     <ProfileNav/>
     <div className='sections'>
        <Profile/>
        <Projects/>
        <ContactMe/>
     </div>
    </div>
  );
}

export default App;
