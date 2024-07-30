import { useEffect } from 'react';



const KeyboardEvents = (
    handleKeyDown: (event: KeyboardEvent) => void,
    handleKeyUp: (event: KeyboardEvent) => void
) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);
};

export default KeyboardEvents;
