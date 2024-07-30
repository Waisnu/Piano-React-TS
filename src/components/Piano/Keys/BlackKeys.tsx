import React from 'react';
import '../piano.css';

const blackKeys = [
    'C#2',
    'D#2',
    'F#2',
    'G#2',
    'A#2',
    'C#3',
    'D#3',
    'F#3',
    'G#3',
    'A#3',
    'C#4',
    'D#4',
    'F#4',
    'G#4',
    'A#4',
    'C#5',
    'D#5',
    'F#5',
    'G#5',
    'A#5',
    'C#6',
    'D#6',
    'F#6',
    'G#6',
    'A#6',
];

interface BlackKeysProps {
    startNote: (note: string) => void;
    stopNote: (note: string) => void;
    pressedNotes: Set<string>;
}

const BlackKeys: React.FC<BlackKeysProps> = ({
    startNote,
    stopNote,
    pressedNotes,
}) => {
    return (
        <div className='black-keys-container'>
            {blackKeys.map((note) => (
                <button
                    key={note}
                    data-note={note}
                    className={`piano-key black ${
                        pressedNotes.has(note) ? 'pressed' : ''
                    }`}
                    onMouseDown={() => startNote(note)}
                    onMouseUp={() => stopNote(note)}
                    onMouseLeave={() => stopNote(note)}
                    onTouchStart={(event) => {
                        event.preventDefault();
                        startNote(note);
                    }}
                >
                    {note}
                </button>
            ))}
        </div>
    );
};

export default BlackKeys;
