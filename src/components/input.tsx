const input = () => {
    return (
        <label className='form-control w-full max-w-xs align'>
            <div className='label  justify-center'>
                <span className='label-text'>Let me get your name before we start</span>
            </div>
            <input
                type='text'
                placeholder='Your beautiful name'
                className='input  input-bordered w-full max-w-xs'
            />
        </label>
    );
};

export default input;
