import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavbarComponents from './components/Navbar';
import FooterComponents from './components/Footer'
import MainPage from './features/mainPage/pages/MainPage'
import AboutPage from './features/aboutPage/pages/AboutPage';
import ProjectPage from './features/projectPage/pages/ProjectPage';
import ShopPage from './features/shopPage/pages/ShopPage';
import FilmDigitalWorkPage from './features/projectPage/pages/FilmDigitalWorkPage';
import UrbanPatternPage from './features/projectPage/pages/UrbanPatternPage';
import SnapPage from './features/projectPage/pages/SnapPage';
import FilmVideoWorkPage from './features/projectPage/pages/FilmVideoWorkPage';
import YoutubeWorkPage from './features/projectPage/pages/YoutubeWorkPage';
import './assets/fonts/Pretendard/web/static/pretendard.css'

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/urbanPattern" element={<ProjectPage />} />
        <Route path="/project/mainWorkPhoto" element={<FilmDigitalWorkPage />} />
        <Route path="/project/urbanPattern" element={<UrbanPatternPage/>} />
        <Route path="/project/snap" element={<SnapPage />} />
        <Route path="/project/mainWorkVideo" element={<FilmVideoWorkPage />} />
        <Route path="/project/youtubeWork" element={<YoutubeWorkPage />} /> 
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <FooterComponents />
      </div>
  );
}

export default App;
