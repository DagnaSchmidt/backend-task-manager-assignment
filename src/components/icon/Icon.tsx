import React from 'react';
import Image from 'next/image';

interface IIconProps {
    type: 'plus' | 'resizer' | 'time',
}

const Icon = ({
    type = 'resizer'
}: IIconProps) => {
    return (
        <Image
            src={require(`../../images/${type}.svg`)}
            alt={type}
            className='w-6 h-6'
        />
    );
};

export default Icon;
