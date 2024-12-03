import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavbarComponents from './components/Navbar';
import FooterComponents from './components/Footer'
import MainPage from './features/mainPage/pages/MainPage'
import AboutPage from './features/aboutPage/pages/AboutPage';
import ShopPage from './features/shopPage/pages/ShopPage';
import FilmDigitalWorkPage from './features/projectPage/pages/FilmDigitalWorkPage';
import './assets/fonts/Pretendard/web/static/pretendard.css'
import ReflectingCityWorkPage from './features/projectPage/pages/ReflectingCityWorkPage';
import UrbanpatternWorkPage from './features/projectPage/pages/UrbanPatternWorkPage';
import PortraitSnapWorkPage from './features/projectPage/pages/PortraitSnapWorkPage';

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/mainWorkPhoto" element={<FilmDigitalWorkPage />} />
        <Route path="/project/urbanPattern" element={<UrbanpatternWorkPage/>} />
        <Route path="/project/reflectingCity" element={<ReflectingCityWorkPage />} />
        <Route path="/project/snap" element={<PortraitSnapWorkPage />} />
        {/* <Route path="/project/mainWorkVideo" element={<FilmVideoWorkPage />} />
        <Route path="/project/youtubeWork" element={<YoutubeWorkPage />} />  */}
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <FooterComponents />
      </div>
  );
}

export default App;
