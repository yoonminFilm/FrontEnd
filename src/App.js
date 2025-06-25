import {Route, Routes} from 'react-router-dom';
import NavbarComponents from './components/Navbar';
import FooterComponents from './components/Footer'
import MainPage from './features/mainPage/pages/MainPage'
import AboutPage from './features/aboutPage/pages/AboutPage';
// import ShopPage from './features/shopPage/pages/ShopPage';
import FilmWorkPage from './features/projectPage/pages/FilmWorkPage';
import ReflectingCityWorkPage from './features/projectPage/pages/ReflectingCityWorkPage';
import UrbanpatternWorkPage from './features/projectPage/pages/UrbanPatternWorkPage';
import PortraitSnapWorkPage from './features/projectPage/pages/PortraitSnapWorkPage';
import CollaborativeWorkPage from './features/projectPage/pages/WorkCooperationPagePage';
import EUMonthTravelPage from './features/projectPage/pages/EUmonthTravelPages';
import DigitalWorkPage from './features/projectPage/pages/DigitalWorkPage';
import './assets/fonts/Pretendard/web/static/pretendard.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <Routes>
        {/* Main */}
        <Route path="/" element={<MainPage />} />
        {/* Project */}
        <Route path="/project/DigitalWork" element={<DigitalWorkPage />} />
        <Route path="/project/FilmWork" element={<FilmWorkPage />} />
        <Route path="/project/euMonthTravel" element={<EUMonthTravelPage />} />
        <Route path="/project/urbanPattern" element={<UrbanpatternWorkPage/>} />
        <Route path="/project/reflectingCity" element={<ReflectingCityWorkPage />} />
        <Route path="/project/snap" element={<PortraitSnapWorkPage />} />
        <Route path="/project/collaboWork" element={<CollaborativeWorkPage />} />
        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        {/* Shop */}
        {/* <Route path="/shop" element={<ShopPage />} /> */}
      </Routes>
      <FooterComponents />
      </div>
  );
}

export default App;
