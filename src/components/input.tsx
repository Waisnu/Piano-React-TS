import React, { useState } from 'react';

//session storage to handle submitted name 

interface InputProps {
    onSubmit: (name: string) => void;
}

const Input: React.FC<InputProps> = ({ onSubmit }) => {

    const [name, setName] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name.trim()) {
            onSubmit(name);
        } else {
            console.error('Name cannot be empty');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='w-full max-w-xs mx-auto'>
            <label className='form-control w-full'>
                <div className='label justify-center'>
                    <span className='label-text'>
                        Let me get your name before we start
                    </span>
                </div>
                <input
                    type='text'
                    placeholder='Your beautiful name'
                    value={name}
                    onChange={handleChange}
                    className='input input-bordered w-full'
                />
            </label>
            <button type='submit' className='btn btn-secondary mt-4 w-32'>
                Play
            </button>
        </form>
    );
};

export default Input;
