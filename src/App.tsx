// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import AboutUs from './pages/About';
import './App.css';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
