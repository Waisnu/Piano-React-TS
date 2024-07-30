import React from 'react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';
import typeScriptLogo from '../assets/typescript.svg';
import tonejsLogo from '../assets/js.svg';
import daisyUILogo from '../assets/daisy.png';
import tailwindcssLogo from '../assets/tailwind.svg';

const teamMembers = [
    {
        name: 'Jhonn Vincent Arcipe',
        role: 'Software Engineer',
        work: '@Cube Asia Singapore',
        workLink: 'https://cube.asia/', 
        course: 'BSIT-SE III',
        avatar: p1,
    },
    {
        name: 'Lyn Charisse Salig',
        role: 'Front-end Developer',
        work: '@Real Inbound Singapore',
        workLink: 'https://www.realinboundconsulting.com/', 
        course: 'BSIT-SE III',
        avatar: p2,
    },
];
const techStack = [
    {
        name: 'Vite',
        logo: viteLogo,
    },
    {
        name: 'React',
        logo: reactLogo,
    },
    {
        name: 'TypeScript',
        logo: typeScriptLogo,
    },
    {
        name: 'Tone.js',
        logo: tonejsLogo,
    },
    {
        name: 'DaisyUI',
        logo: daisyUILogo,  
    },
    {
        name: 'TailwindCSS',
        logo: tailwindcssLogo,
    },
];

const AboutUs: React.FC = () => {
    return (
        <div className='h-full'>
            <section className='text-center mb-12'>
                <h1 className='text-5xl font-bold mb-5'>About</h1>
                <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
                    Pyano is an 8-octave minimalist piano web application
                    designed for music enthusiasts and professionals alike. It
                    offers a seamless and intuitive interface for playing
                    beautiful melodies right from your browser.
                </p>
            </section>

            <section className='mb-12'>
                <h2 className='text-5xl font-bold text-center mb-8'>
                 Team
                </h2>
                <div className='flex justify-center space-x-8 gap-5 p-3'>
                    {teamMembers.map((member) => (
                        <div key={member.name} className='text-center'>
                            <img
                                src={member.avatar}
                                className='w-24 h-24 rounded-full mx-auto mb-4'
                            />
                            <h3 className='text-xl text-gray-300 font-semibold'>
                                {member.name}
                            </h3>
                            <p className='text-gray-400'>{member.role}</p>
                            <p className='text-gray-600'>
                                <a
                                    href={member.workLink}
                                    className='text-blue-400 hover:underline'
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                >
                                    {member.work}
                                </a>
                            </p>
                            <p className='text-gray-600'>{member.course}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className='text-5xl font-bold text-center mb-8'>
                    Stack
                </h2>
                <div className='flex justify-center space-x-8'>
                    {techStack.map((tech) => (
                        <div key={tech.name} className='text-center'>
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className=' logo w-16 h-16 mx-auto mb-4'
                            />
                            <p className='text-lg font-semibold'>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
