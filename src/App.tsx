import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import AboutUs from './pages/aboutUs';
import Piano from './components/Piano/piano';

import './App.css';

const App: React.FC = () => {
    return (
        <div className='app-container'>
            <Navbar />
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/piano' element={<Piano />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
};

export default App;
