import './App.css';
import HeaderTop from './component/HeaderTop';
import { Outlet } from 'react-router-dom';
import HeaderScroll from './component/HeaderScroll';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderScroll />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
