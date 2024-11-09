import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import AboutUs from './pages/aboutUs';
import Piano from './pages/Piano';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            {' '}
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
        </Router>
    );
};

export default App;
