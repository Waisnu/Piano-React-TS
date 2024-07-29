import { useEffect, useState } from 'react';
import * as Tone from 'tone';

export const useSampler = () => {
    const [sampler, setSampler] = useState<Tone.Sampler | null>(null);

    useEffect(() => {
        const sampler = new Tone.Sampler({
            urls: {
                'C4': '/assets/samples/C4.mp3',
                // Add more sample URLs here
            },
            baseUrl: '/assets/samples/',
        }).toDestination();

        setSampler(sampler);
    }, []);

    const playNote = (note: string) => {
        sampler?.triggerAttackRelease(note, '8n');
    };

    return { playNote };
};
