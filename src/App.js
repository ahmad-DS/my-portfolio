import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Resume } from './Components/Resume';
import { Projects } from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Resume/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
