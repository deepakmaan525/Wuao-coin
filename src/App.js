import './App.css';
import Nav from './components/Nav';
import HeroSec from './components/HeroSec';
import Project from './components/Project';
import Benefits from './components/Benefits';
import Whitepaper from './components/Whitepaper';

function App() {
  return (
    <div>
      <div className=' bg-[url("./assets/images/header-bg.png")] '>
        <Nav/>
        <HeroSec/>
      </div>
      <Project/>
      <Benefits/>
      <div className='bg-[url("./assets/images/whitepaper-bg.png")]'>
        <Whitepaper/>
      </div>
    </div>
  );
}

export default App;
