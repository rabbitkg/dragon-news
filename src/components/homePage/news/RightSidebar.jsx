import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-xl mb-3'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500'><FaGoogle />
                    Login with google</button>
                <button className='btn border-gray-400'><FaGithub />
                    Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;