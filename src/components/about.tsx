import React from 'react';
import p1 from '../assets/p1.jpg';
import reactLogo from '../assets/react.svg';
import typeScriptLogo from '../assets/typescript.svg';
import tonejsLogo from '../assets/js.svg';
import viteLogo from '../assets/vite.svg';
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
    }
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
                <div className='text-base-content mt-4'>
                    <h3 className='text-lg font-semibold mb-2'>References:</h3>
                    <p className='text-gray-400'>
                        <a
                            href='https://github.com/Tonejs/audio'
                            className='text-blue-500 hover:underline'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Audio Salamander
                        </a>{' '}
                        |{' '}
                        <a
                            href='https://musical-artifacts.com/artifacts/3386'
                            className='text-blue-500 hover:underline'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Audio Sampler
                        </a>{' '}
                        |{' '}
                        <a
                            href='https://www.onlinepianist.com/virtual-piano'
                            className='text-blue-500 hover:underline'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Inspiration
                        </a>{' '}
                        |{' '}
                        <a
                            href='https://github.com/Tonejs/Tone.js'
                            className='text-blue-500 hover:underline'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Multimedia API
                        </a>{' '}
                        |{' '}
                        <a
                            href='https://webmidijs.org/'
                            className='text-blue-500 hover:underline'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            WebMIDI API
                        </a>{' '}
                        |{' '}
                        <a
                            href='https://tonejs.github.io/docs/15.0.4/classes/Sampler.html'
                            className='text-blue-500 hover:underline'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Documentation
                        </a>
                    </p>
                </div>
            </section>

            <section className='mb-12'>
                <h2 className='text-4xl font-bold text-center mb-4'></h2>
                <div className='flex flex-wrap justify-center gap-8 p-3'>
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

                <div className='flex flex-wrap justify-center gap-8'>
                    {techStack.map((tech) => (
                        <div key={tech.name} className='text-center'>
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className='w-16 h-16 mx-auto mb-4'
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
