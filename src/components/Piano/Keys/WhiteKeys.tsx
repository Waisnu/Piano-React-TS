import React from 'react';
import '../piano.css';

const whiteKeys = [
    { note: 'C2', name: 'C2', key: '1' },
    { note: 'D2', name: 'D2', key: '2' },
    { note: 'E2', name: 'E2', key: '3' },
    { note: 'F2', name: 'F2', key: '4' },
    { note: 'G2', name: 'G2', key: '5' },
    { note: 'A2', name: 'A2', key: '6' },
    { note: 'B2', name: 'B2', key: '7' },
    { note: 'C3', name: 'C3', key: '8' },
    { note: 'D3', name: 'D3', key: '9' },
    { note: 'E3', name: 'E3', key: '0' },
    { note: 'F3', name: 'F3', key: 'Q' },
    { note: 'G3', name: 'G3', key: 'W' },
    { note: 'A3', name: 'A3', key: 'E' },
    { note: 'B3', name: 'B3', key: 'R' },
    { note: 'C4', name: 'C4', key: 'T' },
    { note: 'D4', name: 'D4', key: 'Y' },
    { note: 'E4', name: 'E4', key: 'U' },
    { note: 'F4', name: 'F4', key: 'I' },
    { note: 'G4', name: 'G4', key: 'O' },
    { note: 'A4', name: 'A4', key: 'P' },
    { note: 'B4', name: 'B4', key: 'A' },
    { note: 'C5', name: 'C5', key: 'S' },
    { note: 'D5', name: 'D5', key: 'D' },
    { note: 'E5', name: 'E5', key: 'F' },
    { note: 'F5', name: 'F5', key: 'G' },
    { note: 'G5', name: 'G5', key: 'H' },
    { note: 'A5', name: 'A5', key: 'J' },
    { note: 'B5', name: 'B5', key: 'K' },
    { note: 'C6', name: 'C6', key: 'L' },
    { note: 'D6', name: 'D6', key: 'Z' },
    { note: 'E6', name: 'E6', key: 'X' },
    { note: 'F6', name: 'F6', key: 'C' },
    { note: 'G6', name: 'G6', key: 'V' },
    { note: 'A6', name: 'A6', key: 'B' },
    { note: 'B6', name: 'B6', key: 'N' },
    { note: 'C7', name: 'C7', key: 'M' },
    { note: 'D7', name: 'D7', key: ',' },
    { note: 'C8', name: 'C8', key: '.' },
];

interface WhiteKeysProps {
    startNote: (note: string) => void;
    stopNote: (note: string) => void;
    pressedNotes: Set<string>;
}

const WhiteKeys: React.FC<WhiteKeysProps> = ({
    startNote,
    stopNote,
    pressedNotes,
}) => {
    return (
        <div className='white-keys-container'>
            {whiteKeys.map((key, index) => (
                <div
                    key={index}
                    className={`white ${
                        pressedNotes.has(key.note) ? 'pressed' : ''
                    }`}
                    data-note={key.note}
                    onMouseDown={() => startNote(key.note)}
                    onMouseUp={() => stopNote(key.note)}
                    onMouseLeave={() => stopNote(key.note)}
                    onTouchStart={(event) => {
                        event.preventDefault();
                        startNote(key.note);
                    }}
                >
                    <div className='key-label'>
                        {key.name}{' '}
                        <span className='key-shortcut'>({key.key})</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WhiteKeys;
