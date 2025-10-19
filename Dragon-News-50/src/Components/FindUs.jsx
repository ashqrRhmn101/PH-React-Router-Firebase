import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mt-8'>Find Us On</h1>
            <div className='border-2 border-gray-200 mt-4'>
                <h3 className='border-b-2 border-gray-200 p-3 font-semibold flex items-center gap-2'><span className=''><CiFacebook size={25}/></span> Facebook</h3>
                <h3 className='border-b-2 border-gray-200 p-3 font-semibold flex items-center gap-2'><span><FaTwitter /></span>Twitter</h3>
                <h3 className='p-3 font-semibold flex items-center gap-2'><span><FaInstagram /></span>Instagram</h3>
            </div>
        </div>
    );
};

export default FindUs;