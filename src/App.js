import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Components/homepage';
import { Ipage } from './Components/ipage';
import { Friends } from './Components/friendspage';



function App() {
  const app = window.Telegram.WebApp;
app.ready()
app.isClosingConfirmationEnabled = true;
app.isVerticalSwipesEnabled = false;

  return(
    <>
    <header>
      <Link className='buttom' onclick="return false" to="/i">08.08</Link>
      <Link className='buttom' onclick="return false" to="/">Home</Link>
      <Link className='buttom' onclick="return false" to="/friends">Friends</Link>
    </header>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/i" element={<Ipage />} />
            <Route path="/friends" element={<Friends />} />
    </Routes>
    </>
  );
}

export default App;
