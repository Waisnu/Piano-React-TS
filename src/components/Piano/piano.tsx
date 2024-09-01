import React, { useState} from 'react';
import WhiteKeys from './Keys/WhiteKeys';
import BlackKeys from './Keys/BlackKeys';
import KeyboardEvents from './Keys/KeyboardEvents';
import { sampler } from './sampler';
import './piano.css';

const noteToKeyMap: Record<string, string> = {
    // White Keys
    C2: 'Digit1', // 1
    D2: 'Digit2', // 2
    E2: 'Digit3', // 3
    F2: 'Digit4', // 4
    G2: 'Digit5', // 5
    A2: 'Digit6', // 6
    B2: 'Digit7', // 7
    C3: 'Digit8', // 8
    D3: 'Digit9', // 9
    E3: 'Digit0', // 0
    F3: 'KeyQ', // Q
    G3: 'KeyW', // W
    A3: 'KeyE', // E
    B3: 'KeyR', // R
    C4: 'KeyT', // T
    D4: 'KeyY', // Y
    E4: 'KeyU', // U
    F4: 'KeyI', // I
    G4: 'KeyO', // O
    A4: 'KeyP', // P
    B4: 'KeyA', // A
    C5: 'KeyS', // S
    D5: 'KeyD', // D
    E5: 'KeyF', // F
    F5: 'KeyG', // G
    G5: 'KeyH', // H
    A5: 'KeyJ', // J
    B5: 'KeyK', // K
    C6: 'KeyL', // L
    D6: 'KeyZ', // Z
    E6: 'KeyX', // X
    F6: 'KeyC', // C
    G6: 'KeyV', // V
    A6: 'KeyB', // B
    B6: 'KeyN', // N
    C7: 'KeyM', // M
    D7: 'Comma', // ,
    C8: 'Period', // .

    // Black Keys
    'C#2': 'Shift+Digit1', // Shift + 1
    'D#2': 'Shift+Digit2', // Shift + 2
    'F#2': 'Shift+Digit4', // Shift + 4
    'G#2': 'Shift+Digit5', // Shift + 5
    'A#2': 'Shift+Digit6', // Shift + 6
    'C#3': 'Shift+Digit8', // Shift + 8
    'D#3': 'Shift+Digit9', // Shift + 9
    'F#3': 'Shift+KeyQ', // Shift + Q
    'G#3': 'Shift+KeyW', // Shift + W
    'A#3': 'Shift+KeyE', // Shift + E
    'C#4': 'Shift+KeyT', // Shift + T
    'D#4': 'Shift+KeyY', // Shift + Y
    'F#4': 'Shift+KeyI', // Shift + I
    'G#4': 'Shift+KeyO', // Shift + O
    'A#4': 'Shift+KeyP', // Shift + P
    'C#5': 'Shift+KeyS', // Shift + S
    'D#5': 'Shift+KeyD', // Shift + D
    'F#5': 'Shift+KeyG', // Shift + G
    'G#5': 'Shift+KeyH', // Shift + H
    'A#5': 'Shift+KeyJ', // Shift + J
    'C#6': 'Shift+KeyL', // Shift + L
    'D#6': 'Shift+KeyZ', // Shift + Z
    'F#6': 'Shift+KeyC', // Shift + C
    'G#6': 'Shift+KeyV', // Shift + V
    'A#6': 'Shift+KeyB', // Shift + B
};

const Piano: React.FC = () => {
    const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
    const [mouseDown, setMouseDown] = useState<boolean>(false);

    // Audio event handlers


    // Start and stop note functions for audio playback
    const startNote = (note: string) => {
        if (!pressedKeys.has(note)) {
            pressedKeys.add(note);
            sampler.triggerAttack(note);
            setPressedKeys(new Set(pressedKeys));

        }
    };

    const stopNote = (note: string) => {
        if (pressedKeys.has(note)) {
            pressedKeys.delete(note);
            sampler.triggerRelease(note);
            setPressedKeys(new Set(pressedKeys));
        }
    };

    const handleMouseUp = () => {
        setMouseDown(false);
        pressedKeys.forEach((note) => stopNote(note)); //
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (mouseDown) {
            const target = event.target as HTMLButtonElement;
            const note = target.getAttribute('data-note');
            if (note) {
                startNote(note);
            }
        }
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        event.preventDefault(); // Prevent default touch behavior
        const touch = event.touches[0];
        const target = document.elementFromPoint(
            touch.clientX,
            touch.clientY
        ) as HTMLButtonElement;
        const note = target?.getAttribute('data-note');
        if (note) {
            startNote(note);
        }
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        event.preventDefault(); // Prevent default touch behavior
        pressedKeys.forEach((note) => stopNote(note));
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        event.preventDefault(); // Prevent default touch behavior
        const touch = event.touches[0];
        const target = document.elementFromPoint(
            touch.clientX,
            touch.clientY
        ) as HTMLButtonElement;
        const note = target?.getAttribute('data-note');
        if (note) {
            startNote(note);
        }
    };

    // Keyboard event handlers
    const handleKeyDown = (event: KeyboardEvent) => {
        const isShift = event.shiftKey;
        const code = isShift ? `Shift+${event.code}` : event.code;

        const note = Object.keys(noteToKeyMap).find(
            (key) => noteToKeyMap[key] === code
        );
        if (note) {

         startNote(note);
        }
    };

    // Stop note when key is released

    const handleKeyUp = (event: KeyboardEvent) => {
        const isShift = event.shiftKey;
        const code = isShift ? `Shift+${event.code}` : event.code;
        const note = Object.keys(noteToKeyMap).find(
            (key) => noteToKeyMap[key] === code
        );
        if (note) stopNote(note);
    };

    KeyboardEvents(handleKeyDown, handleKeyUp);

    return (
        <div
            className='piano-container'
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}b
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <WhiteKeys
                startNote={startNote}
                stopNote={stopNote}
                pressedNotes={pressedKeys}
            />
            <BlackKeys
                startNote={startNote}
                stopNote={stopNote}
                pressedNotes={pressedKeys}
            />
        </div>
    );
};

export default Piano;
