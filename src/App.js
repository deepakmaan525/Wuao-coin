import './App.css';
import Nav from './components/Nav';
import HeroSec from './components/HeroSec';

function App() {
  return (
    <div>
      <div className=' bg-[url("./assets/images/header-bg.png")] '>
        <Nav/>
        <HeroSec/>
      </div>
    </div>
  );
}

export default App;
