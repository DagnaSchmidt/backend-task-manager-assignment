import React from 'react';

interface IButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    type: 'add' | 'delete',
    label: string
};

const Button = <C extends React.ElementType = "button">({
    type,
    label,
    ...rest
}: IButtonProps) => {

    return (
        <button
            className={[
                'rounded-xl px-3 py-2 text-slate-50',
                type === 'add' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-red-600 hover:bg-red-700'
            ].join(' ')}
            {...rest}
        >
            <p
                className='text-base uppercase font-bold'
            >
                {label}
            </p>
        </button>
    );
};

export default Button;
