import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home } from './Components/homepage';
import { useSwipeable } from 'react-swipeable';
import { Ipage } from './Components/ipage';
import { Friends } from './Components/friendspage';
import Preloader from './Components/Preloader';
import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { getUserData } from './services/api';
import { useTelegram } from './hooks/useTelegram';
import WebApp from '@twa-dev/sdk';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const pages = ['/ipage', '/', '/friends']; 
  const { userId } = useTelegram();
  
  const navigate = useNavigate();

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme) {
      // Применяем тему к корневому элементу
      document.documentElement.style.setProperty('--tg-theme-bg-color', theme.bg_color);
      document.documentElement.style.setProperty('--tg-theme-text-color', theme.text_color);
      document.documentElement.style.setProperty('--tg-theme-hint-color', theme.hint_color);
      document.documentElement.style.setProperty('--tg-theme-link-color', theme.link_color);
      document.documentElement.style.setProperty('--tg-theme-button-color', theme.button_color);
      document.documentElement.style.setProperty('--tg-theme-button-text-color', theme.button_text_color);
      document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', theme.secondary_bg_color);
      document.documentElement.style.setProperty('--tg-theme-header-bg-color', theme.header_bg_color);
      document.documentElement.style.setProperty('--tg-theme-accent-text-color', theme.accent_text_color);
    }
  }, [theme]);

  useEffect(() => {
    const loadUserData = async () => {
      if (userId) {
        console.log('Загрузка данных для пользователя:', userId);
        const userData = await getUserData(userId);
        if (userData) {
          console.log('Загруженные данные:', userData);
        }
      }
    };

    loadUserData();
  }, [userId]);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    if (WebApp.isVersionAtLeast('6.1')) {
      WebApp.requestViewport();
    }
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => swipePage(1),
    onSwipedRight: () => swipePage(-1),
    preventDefaultTouchmoveEvent: true,
  });

  const swipePage = (direction) => {
    const currentPath = window.location.pathname;
    const currentIndex = pages.indexOf(currentPath);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < pages.length) {
      navigate(pages[nextIndex]);
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return(
    <>
      <header>
        <Link className='buttom' onClick={() => false} to="/ipage">08.08</Link>
        <Link className='buttom' onClick={() => false} to="/">Home</Link>
        <Link className='buttom' onClick={() => false} to="/friends">Friends</Link>
      </header>
      <div {...handlers}>
        <Routes>
          <Route path="/ipage" element={<Ipage />} />
          <Route path="/" element={<Home/>} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
