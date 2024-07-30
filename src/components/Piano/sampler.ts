import * as Tone from 'tone';


export const sampleUrls = {
    "A0": "A0.mp3",
    "A1": "A1.mp3",
    "A2": "A2.mp3",
    "A3": "A3.mp3",
    "A4": "A4.mp3",
    "A5": "A5.mp3",
    "A6": "A6.mp3",
    "A7": "A7.mp3",
    "C1": "C1.mp3",
    "C2": "C2.mp3",
    "C3": "C3.mp3",
    "C4": "C4.mp3",
    "C5": "C5.mp3",
    "C6": "C6.mp3",
    "C7": "C7.mp3",
    "C8": "C8.mp3",
    "D#1": "Ds1.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    "D#4": "Ds4.mp3",
    "D#5": "Ds5.mp3",
    "D#6": "Ds6.mp3",
    "D#7": "Ds7.mp3",
    "F#1": "Fs1.mp3",
    "F#2": "Fs2.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    "F#5": "Fs5.mp3",
    "F#6": "Fs6.mp3",
    "F#7": "Fs7.mp3",
    "A#1": "As1.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    "A#4": "As4.mp3",
    "A#5": "As5.mp3",
    "A#6": "As6.mp3",
    "A#7": "As7.mp3"
};

export const sampler = new Tone.Sampler({
    urls: sampleUrls,
    baseUrl: 'https://tonejs.github.io/audio/salamander/',
    onload: () => {
        console.log('Sampler loaded');
    },
    onerror: (error) => {
        console.error('Error loading samples:', error);
    },
    attack: 0.1,
    release: 3.0,
    curve: 'exponential'
}).toDestination();
