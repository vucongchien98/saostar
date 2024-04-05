import './App.css';
import HeaderTop from './component/HeaderTop';
import { Outlet } from 'react-router-dom';
import HeaderScroll from './component/HeaderScroll';
import Footer from './component/Footer';
import ScrollTop from './component/ScrollTop';

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderScroll />
      <main>
        <ScrollTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
