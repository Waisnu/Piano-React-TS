import React from 'react';

interface KeyProps {
    note: string;
    onKeyDown: (note: string) => void;
    onKeyUp: (note: string) => void;
}

const Key: React.FC<KeyProps> = ({ note, onKeyDown, onKeyUp }) => {
    const isSharp = note.includes('#');
    const className = `key ${isSharp ? 'sharp' : 'natural'}`;

    const handleMouseDown = () => {
        onKeyDown(note);
    };

    const handleMouseUp = () => {
        onKeyUp(note);
    };

    return (
        <div
            className={className}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {note}
        </div>
    );
};

export default Key;
