import React from 'react';

const Header = () => {
    return (
        <div
            className='flex justify-between items-baseline max-w-[340px] pb-2 border-b border-slate-700'
        >
            <h1>Sunday</h1>
            <div
                className='bg-slate-900 px-2 py-1 rounded-lg'
            >
                <h6>Jun 31</h6>
            </div>
        </div>
    )
}

export default Header;
