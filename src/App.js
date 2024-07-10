import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Components/homepage';
import { Ipage } from './Components/ipage';
import { Friends } from './Components/friendspage';
import { useTelegram } from '../useTelegram';



function App() {
  const {close} = useTelegram();
  return(
    <>
    <header>
      <Link className='buttom' to="/i">08.08</Link>
      <Link className='buttom' to="/">Home</Link>
      <Link className='buttom' to="/friends">Friends</Link>
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
