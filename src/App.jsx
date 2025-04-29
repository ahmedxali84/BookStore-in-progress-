import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import FeaturedBooks from './Components/FeaturedBooks/FeaturedBooks';
import Categories from './Components/Categories/Categories';
import Testimonials from './Components/Testimonials/Testimonials';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedBooks />
        <Categories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;