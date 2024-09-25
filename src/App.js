import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home } from './Components/homepage';
import { useSwipeable } from 'react-swipeable';
import { Ipage } from './Components/ipage';
import { Friends } from './Components/friendspage';



const App = () => {
  const pages = ['/i', '/', '/friends']; 
const app = window.Telegram.WebApp;
app.ready()
app.isClosingConfirmationEnabled = true;
app.isVerticalSwipesEnabled = false;
const navigate = useNavigate();

const handlers = useSwipeable({
  onSwipedLeft: () => swipePage(1),
  onSwipedRight: () => swipePage(-1),
  preventDefaultTouchmoveEvent: true,
});
  const swipePage = (direction) => {
    const currentPath = window.location.pathname; // Текущий путь
    const currentIndex = pages.indexOf(currentPath);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < pages.length) {
      navigate(pages[nextIndex]); // Навигация на следующую страницу
    }
  };

  return(
    <>
    <header>
      <Link className='buttom' onclick="return false" to="/i">08.08</Link>
      <Link className='buttom' onclick="return false" to="/">Home</Link>
      <Link className='buttom' onclick="return false" to="/friends">Friends</Link>
    </header>
    <div {...handlers}>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/i" element={<Ipage />} />
            <Route path="/friends" element={<Friends />} />
    </Routes>
    </div>
    </>
  );
}
export default App;
