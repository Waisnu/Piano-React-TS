import React, { useState } from 'react';

const Input = ({ onSubmit }: { onSubmit: (name: string) => void }) => {
    const [name, setName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {  
            localStorage.setItem('userName', name);
            onSubmit(name);
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
