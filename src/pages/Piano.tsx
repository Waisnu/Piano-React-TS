import  { useEffect, useState } from 'react';
import PianoComponent from '../components/Piano/piano';

const Piano = () => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        // Fetch the name from session storage
        const storedName = sessionStorage.getItem('userName');
        setUserName(storedName);
    }, []);

    return (
        <div className='p-10 max-w-full mx-auto bg-base-200'>
            <header className='text-center mb-10'>
                <h1 className='text-3xl font-bold mb-10'>
                    {userName
                        ? `Welcome to the Virtual Piano, ${userName}!`
                        : 'Welcome to the Virtual Piano!'}
                </h1>
                <p className='text-lg text-base-content '>
                    Use the keyboard or mouse to play notes on the piano. Each
                    white and black key corresponds to a specific note. Press or
                    click on the keys to produce sound. On a keyboard, use the
                    designated keys shown below each key.
                </p>
            </header>
            <div className='flex justify-center mb-8'>
                <PianoComponent />
            </div>
            <footer className='text-center mt-6 p-4 border border-base-300 rounded-lg'>
                <p className='text-lg text-base-content'>
                    <strong>Instructions:</strong>
                    <ul className='list-disc list-inside mt-2'>
                        <li>
                            Click or press the white keys to play natural notes
                            (C, D, E, F, G, A, B).
                        </li>
                        <li>
                            Click or press the black keys to play sharps and
                            flats (C#, D#, F#, G#, A#). To play sharp notes,
                            just press Shift + the key that corresponds to the
                            note.
                        </li>
                        <li>
                            Check the key labels on the keys for the
                            corresponding keyboard shortcuts.
                        </li>
                    </ul>
                </p>
            </footer>
        </div>
    );
};

export default Piano;
