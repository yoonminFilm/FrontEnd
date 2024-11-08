import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavbarComponents from './components/Navbar';
import FooterComponents from './components/Footer'
import MainPage from './features/mainPage/pages/MainPage'
import AboutPage from './features/aboutPage/pages/AboutPage';
import ProjectPage from './features/projectPage/pages/ProjectPage';
import ShopPage from './features/shopPage/pages/ShopPage';

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <Routes>
        <Route path="/" elements={<MainPage/>}></Route>
        <Route path="/about" elements={<AboutPage/>}></Route>
        <Route path="/project" elements={<ProjectPage/>}></Route>
        <Route path="/shop" elements={<ShopPage/>}></Route>
      </Routes>
      <FooterComponents />
      </div>
  );
}

export default App;
