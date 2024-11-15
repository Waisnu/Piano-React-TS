import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className='navbar bg-base-100'>
            <div className='navbar-start'>
                <div className='dropdown '>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle '
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h7'
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
                    >
                        <li>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/piano'}>
                                Piano
                            </Link>
                        </li>
                        <li>
                            <Link to='/about-us'>
                             About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* nav text  */}

            <div className='navbar-end'>
                <button className='btn btn-ghost btn-circle'>
                    <a
                        href='https://github.com/Waisnu/Piano-React-TS'
                        target='_blank'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='50'
                            height='50'
                            viewBox='0 0 100 100'
                        >
                            <circle
                                cx='50'
                                cy='50'
                                r='30'
                                fill='#4e6e91'
                            ></circle>
                            <path
                                fill='#6693c1'
                                d='M50,83c-18.196,0-33-14.804-33-33s14.804-33,33-33s33,14.804,33,33S68.196,83,50,83z M50,22 c-15.439,0-28,12.561-28,28s12.561,28,28,28s28-12.561,28-28S65.439,22,50,22z'
                            ></path>
                            <path
                                fill='#eeecd9'
                                d='M69.457,49.039c0-3.321-1.305-6.334-3.419-8.573c0.396-2.203,0.351-5.301-0.538-7.966 c-4.475,0-8.114,3.447-8.702,4H43.994c-0.589-0.552-4.019-4-8.494-4c-0.8,2.401-1.087,5.233-0.846,7.295 c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459H45.5c-2.003,0.917-3.635,2.756-4,5 c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46s1.23,1.23,2.46,3.69 C33.872,68.828,36.5,70.5,41.5,70.5v6.6c0,0,6.346,1.4,8.5,1.4s8.5-1.4,8.5-1.4l0-9.445c0-2.718-1.681-5.092-4-6.155h2.449 C63.858,61.5,69.457,55.947,69.457,49.039z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M50,85c-19.299,0-35-15.701-35-35s15.701-35,35-35s35,15.701,35,35S69.299,85,50,85z M50,17 c-18.196,0-33,14.804-33,33s14.804,33,33,33s33-14.804,33-33S68.196,17,50,17z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M50,79c-15.99,0-29-13.009-29-29s13.01-29,29-29s29,13.009,29,29c0,2.925-0.435,5.812-1.291,8.582 c-0.082,0.263-0.364,0.411-0.625,0.33c-0.264-0.082-0.412-0.361-0.33-0.625C77.581,55.612,78,52.825,78,50 c0-15.439-12.561-28-28-28S22,34.561,22,50s12.561,28,28,28c5.856,0,11.464-1.788,16.217-5.171c0.225-0.16,0.536-0.107,0.697,0.117 c0.16,0.225,0.107,0.537-0.117,0.697C61.873,77.147,56.065,79,50,79z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M68.631,72.068c-0.14,0-0.279-0.059-0.378-0.173c-0.181-0.209-0.158-0.525,0.051-0.706 c0.739-0.638,1.452-1.324,2.122-2.037c0.188-0.202,0.505-0.21,0.706-0.023c0.201,0.189,0.212,0.505,0.023,0.707 c-0.693,0.739-1.433,1.449-2.197,2.11C68.863,72.028,68.747,72.068,68.631,72.068z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M72.494,68.002c-0.107,0-0.216-0.035-0.308-0.105c-0.218-0.17-0.257-0.484-0.087-0.702 c1.649-2.118,2.982-4.452,3.963-6.938c0.101-0.258,0.392-0.382,0.648-0.282c0.257,0.102,0.383,0.392,0.281,0.648 c-1.015,2.575-2.396,4.993-4.104,7.186C72.79,67.936,72.643,68.002,72.494,68.002z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M58.5,77.6c-0.276,0-0.5-0.224-0.5-0.5v-9.445c0-2.431-1.456-4.668-3.708-5.701 c-0.214-0.098-0.331-0.332-0.28-0.561C54.062,61.164,54.265,61,54.5,61h2.449c6.621,0,12.008-5.366,12.008-11.961 c0-3.064-1.166-5.987-3.282-8.229c-0.109-0.115-0.157-0.275-0.129-0.432c0.333-1.854,0.39-4.725-0.409-7.37 c-3.682,0.162-6.795,2.725-7.987,3.848C57.057,36.943,56.925,37,56.798,37H43.993c-0.127,0-0.249-0.048-0.342-0.135l-0.092-0.087 c-3.078-2.927-5.829-3.686-7.697-3.77c-0.662,2.162-0.941,4.762-0.712,6.729c0.019,0.16-0.042,0.319-0.161,0.428 c-2.506,2.275-3.943,5.51-3.943,8.875C31.046,55.635,36.433,61,43.053,61H45.5c0.235,0,0.438,0.164,0.488,0.394 c0.051,0.229-0.066,0.463-0.28,0.561c-1.974,0.904-3.397,2.676-3.715,4.625C41.954,66.822,41.745,67,41.5,67 c-2.333,0-5.191-0.271-6.598-2.38c-2.311-3.467-3.28-3.467-4.403-3.467c-0.14,0-0.385,0.023-0.448,0.178 c-0.086,0.206,0.031,0.756,0.702,1.428c1.287,1.287,1.311,1.335,2.554,3.82C34.409,68.785,37.319,70,41.5,70 c0.276,0,0.5,0.224,0.5,0.5v6.6c0,0.276-0.224,0.5-0.5,0.5S41,77.376,41,77.1v-6.105c-5.797-0.131-7.866-2.525-8.588-3.969 c-1.194-2.387-1.194-2.387-2.366-3.56c-0.869-0.869-1.213-1.81-0.919-2.518c0.209-0.505,0.709-0.795,1.372-0.795 c1.588,0,2.81,0.272,5.235,3.912c1.069,1.604,3.359,1.9,5.356,1.932c0.362-1.545,1.309-2.965,2.63-3.997h-0.668 c-7.172,0-13.007-5.813-13.007-12.959c0-3.562,1.485-6.988,4.084-9.442c-0.209-2.203,0.128-4.956,0.896-7.257 C35.094,32.138,35.285,32,35.5,32c2.036,0,5.192,0.696,8.692,4h12.409c1.427-1.311,4.847-4,8.898-4 c0.215,0,0.406,0.138,0.475,0.342c0.935,2.802,0.928,5.901,0.598,7.965c2.185,2.404,3.385,5.495,3.385,8.732 C69.957,56.186,64.122,62,56.949,62h-0.693C57.963,63.368,59,65.442,59,67.655V77.1C59,77.376,58.776,77.6,58.5,77.6z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M34.238,45.97c-0.063,0-0.127-0.012-0.188-0.037c-0.256-0.104-0.379-0.396-0.274-0.651 c0.476-1.167,1.167-2.226,2.057-3.148c0.192-0.198,0.509-0.204,0.707-0.013c0.199,0.192,0.205,0.508,0.014,0.707 c-0.802,0.831-1.425,1.783-1.852,2.831C34.622,45.853,34.436,45.97,34.238,45.97z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M33.66,51.021c-0.241,0-0.454-0.176-0.493-0.422c-0.08-0.51-0.121-1.034-0.121-1.558 c0-0.533,0.042-1.067,0.124-1.59c0.044-0.273,0.305-0.459,0.572-0.416c0.272,0.043,0.459,0.299,0.416,0.572 c-0.074,0.471-0.112,0.953-0.112,1.434c0,0.472,0.037,0.943,0.109,1.402c0.043,0.273-0.144,0.529-0.416,0.572 C33.713,51.019,33.687,51.021,33.66,51.021z'
                            ></path>
                            <path
                                fill='#1f212b'
                                d='M41.457,58.914c-0.028,0-0.057-0.002-0.085-0.007c-3.442-0.585-6.372-2.975-7.646-6.238 c-0.101-0.257,0.026-0.547,0.284-0.647c0.256-0.101,0.547,0.027,0.647,0.284c1.146,2.938,3.783,5.089,6.882,5.615 c0.271,0.046,0.455,0.305,0.409,0.577C41.907,58.741,41.696,58.914,41.457,58.914z'
                            ></path>
                        </svg>
                    </a>
                </button>

                <button className='btn btn-ghost btn-circle'>
                    <div className='indicator'>
                        <a
                            href='https://www.linkedin.com/in/jhonnvincentarcipe/'
                            target='_blank'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                x='0px'
                                y='0px'
                                width='50'
                                height='50'
                                viewBox='0 0 100 100'
                            >
                                <path
                                    fill='#78a1d1'
                                    d='M69.307,81.654h-39c-6.6,0-12-5.4-12-12v-39c0-6.6,5.4-12,12-12h39c6.6,0,12,5.4,12,12v39C81.307,76.254,75.907,81.654,69.307,81.654z'
                                ></path>
                                <path
                                    fill='#1f212b'
                                    d='M69.307,82.654h-39c-7.168,0-13-5.832-13-13v-39c0-7.168,5.832-13,13-13h39c7.168,0,13,5.832,13,13v39C82.307,76.822,76.476,82.654,69.307,82.654z M30.307,19.654c-6.065,0-11,4.935-11,11v39c0,6.065,4.935,11,11,11h39c6.065,0,11-4.935,11-11v-39c0-6.065-4.935-11-11-11H30.307z'
                                ></path>
                                <path
                                    fill='#78a1d1'
                                    d='M76.807,48.154v18.663c0,5.685-4.652,10.337-10.337,10.337H33.144c-5.685,0-10.337-4.652-10.337-10.337V33.491c0-5.685,4.652-10.337,10.337-10.337h33.663'
                                ></path>
                                <path
                                    fill='#1f212b'
                                    d='M66.47,77.654H33.144c-5.976,0-10.837-4.861-10.837-10.837V33.49c0-5.976,4.861-10.837,10.837-10.837h33.663c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H33.144c-5.424,0-9.837,4.413-9.837,9.837v33.326c0,5.424,4.413,9.837,9.837,9.837H66.47c5.424,0,9.837-4.413,9.837-9.837V48.154c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v18.663C77.307,72.792,72.446,77.654,66.47,77.654z'
                                ></path>
                                <path
                                    fill='#1f212b'
                                    d='M76.807 46.654c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5s.5.224.5.5v4C77.307 46.43 77.083 46.654 76.807 46.654zM76.807 40.654c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C77.307 40.43 77.083 40.654 76.807 40.654z'
                                ></path>
                                <path
                                    fill='#fdfcee'
                                    d='M64.807,53.974v10.179h-6l-0.083-10.092c0-2.556-1.163-4.372-3.456-4.372c-1.751,0-2.788,1.172-3.248,2.309c-0.165,0.404-0.213,0.973-0.213,1.542v10.613H45.73c0,0,0.082-17.219,0-19h6.077v2.933c-0.014,0.022-0.027,0.045-0.041,0.067h0.041v-0.067c0.845-1.41,2.387-3.053,5.752-3.053C61.727,45.026,64.807,47.624,64.807,53.974z M38.825,36.195c-1.877,0-3.101,1.287-3.101,2.979c0,1.654,1.188,2.979,3.03,2.979h0.036c1.913,0,3.101-1.325,3.101-2.979C41.849,37.483,40.696,36.195,38.825,36.195z M35.807,64.154h6v-19h-6V64.154z'
                                ></path>
                                <path
                                    fill='#1f212b'
                                    d='M64.807,64.654h-6c-0.274,0-0.498-0.221-0.5-0.496l-0.083-10.092c0-1.168-0.288-3.876-2.956-3.876c-1.784,0-2.541,1.396-2.784,1.997c-0.117,0.287-0.176,0.743-0.176,1.354v10.613c0,0.276-0.224,0.5-0.5,0.5H45.73c-0.133,0-0.261-0.053-0.354-0.147s-0.146-0.222-0.146-0.355c0.001-0.172,0.081-17.226,0-18.975c-0.006-0.136,0.043-0.27,0.138-0.368c0.095-0.099,0.225-0.155,0.362-0.155h6.077c0.276,0,0.5,0.224,0.5,0.5v1.43c1.288-1.381,3.071-2.038,5.271-2.05c2.188,0,3.968,0.668,5.288,1.986c1.62,1.617,2.441,4.125,2.441,7.456v10.179C65.307,64.43,65.083,64.654,64.807,64.654z M59.303,63.654h5.004v-9.679c0-3.055-0.723-5.325-2.148-6.748c-1.125-1.124-2.667-1.693-4.582-1.693c-0.006,0-0.011,0-0.017,0c-3.215,0-4.561,1.557-5.292,2.756c-0.075,0.199-0.253,0.364-0.461,0.364c-0.181,0-0.368-0.098-0.457-0.255c-0.077-0.137-0.1-0.3-0.043-0.441v-2.304h-5.064c0.053,3.027,0.001,15.303-0.011,18h5.075V53.54c0-0.753,0.082-1.319,0.25-1.731c0.663-1.64,2.051-2.62,3.71-2.62c2.44,0,3.956,1.867,3.956,4.873L59.303,63.654z M41.807,64.654h-6c-0.276,0-0.5-0.224-0.5-0.5v-19c0-0.276,0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5v19C42.307,64.43,42.083,64.654,41.807,64.654z M36.307,63.654h5v-18h-5V63.654z M38.789,42.654c-2.081,0-3.565-1.463-3.565-3.479s1.515-3.479,3.602-3.479c2.048,0,3.515,1.426,3.565,3.467C42.391,41.191,40.876,42.654,38.789,42.654z M38.825,36.695c-1.532,0-2.602,1.02-2.602,2.479c0,1.459,1.041,2.479,2.53,2.479c1.567,0,2.637-1.02,2.637-2.479C41.353,37.673,40.346,36.695,38.825,36.695z'
                                ></path>
                            </svg>
                        </a>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default navbar;
