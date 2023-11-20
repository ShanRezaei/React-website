import React from 'react';
// importing components
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';

// importing containers
import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibility from './containers/possibility/Possibility';
import Whatmodern from './containers/whatModern/Whatmodern';




function App() {
  return (
    <div className='container'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />

        </div>
      
        <CTA />
       
        <Footer />


    </div>
  );
}

export default App;
