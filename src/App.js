
import './App.css';
import Category from './components/Category';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import TopD from './components/Top Selling';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Category />
      <TopD />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
