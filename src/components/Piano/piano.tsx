import React, { useEffect, useRef } from 'react';
import { Piano as TonePiano } from '@tonejs/piano';
import './piano.css';
import { JSX } from 'react/jsx-runtime';

const Piano: React.FC = () => {
    const piano = useRef<TonePiano | null>(null);

    useEffect(() => {
        piano.current = new TonePiano({
            velocities: 5,
        });

        piano.current.toDestination();
        piano.current.load().then(() => {
            console.log('Piano loaded!');
        });

        return () => {
            piano.current?.dispose();
        };
    }, []);

    const handleKeyDown = (note: string) => {
        piano.current?.keyDown({ note, velocity: 0.7 });
    };

    const handleKeyUp = (note: string) => {
        piano.current?.keyUp({ note });
    };

    const renderKeys = () => {
        const keys: JSX.Element[] = [];
        const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const blackKeys = ['C#', 'D#', 'F#', 'G#', 'A#'];

        for (let octave = 0; octave <= 7; octave++) {
            whiteKeys.forEach((key) => {
                keys.push(
                    <div
                        key={`${key}${octave}`}
                        className='key white'
                        onMouseDown={() => handleKeyDown(`${key}${octave}`)}
                        onMouseUp={() => handleKeyUp(`${key}${octave}`)}
                    />
                );
            });
            blackKeys.forEach((key) => {
                if (key !== 'E#' && key !== 'B#') {
                    keys.push(
                        <div
                            key={`${key}${octave}`}
                            className='key black'
                            onMouseDown={() => handleKeyDown(`${key}${octave}`)}
                            onMouseUp={() => handleKeyUp(`${key}${octave}`)}
                        />
                    );
                }
            });
        }

        return keys;
    };

    return (
        <div className='piano'>
            <div className='keys'>{renderKeys()}</div>
        </div>
    );
};

export default Piano;
