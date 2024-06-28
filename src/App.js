import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Components/homepage';
import { Ipage } from './Components/ipage';
import { Friends } from './Components/friendspage';



function App() {
  var BackButton = WebApp.BackButton;
BackButton.show();
BackButton.onClick(function() {
    WebApp.showAlert("BackButton clicked");
    BackButton.hide();
});

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
