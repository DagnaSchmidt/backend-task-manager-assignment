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
            {...rest}
        >
            <p>
                {label}
            </p>
        </button>
    );
};

export default Button;
