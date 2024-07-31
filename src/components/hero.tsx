import React from 'react';
import bg from '../assets/bg.png';
import Input from './input';

const Hero: React.FC = () => {
    // Define a placeholder function for onSubmit
    const handleNameSubmit = (name: string) => {
        if (name.trim()) {
            console.log('Name submitted:', name);
        } else {
            console.error('Name cannot be empty');
        }
    };

    return (
        <div
            className='hero h-full flex items-center justify-center'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='hero-content text-neutral-content text-center'>
                <div className='max-w-2xl'>
                    <h1 className='mb-10 text-9xl font-bold text-gray-300'>
                        Pyano<span className='blink'>_</span>
                    </h1>

                    <p className='mb-5 text-gray-400'>
                        A minimalist virtual piano designed for music
                        enthusiasts, play beautiful melodies right from your
                        browser.
                    </p>

                    <div className='mb-5'>
                        <Input onSubmit={handleNameSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
