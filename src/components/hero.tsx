import bg from '../assets/bg.png';
import Input from './input';
const hero = () => {
    return (
        <div
            className='hero h-screen'
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className='hero-overlay'></div>
            <div className='hero-content text-neutral-content text-center'>
                <div className='max-w-md'>
                    <h1 className='mb-10 text-9xl font-bold'>Piyano</h1>
                    <p className='mb-5'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>

                    <div className='mb-5 flex justify-center'>
                    <Input />
                    </div>
                    <button className='btn btn-outline'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default hero;
