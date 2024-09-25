import React from 'react';
import { useDate } from '../../utils/useDate';


const Header = () => {
    const date = useDate();

    return (
        <div
            className='flex justify-between items-baseline pb-2 border-b border-slate-700'
        >
            <h1>{date.day}</h1>
            <div
                className='bg-slate-900 px-2 py-1 rounded-lg'
            >
                <h6>{date.monthAndDate}</h6>
            </div>
        </div>
    );
};

export default Header;
