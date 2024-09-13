import React, { forwardRef } from 'react';
import Icon from '../icon/Icon';

interface IInputProps {
    category: 'task' | 'description' | 'date'
    type?: React.HTMLInputTypeAttribute;
    id: string;
    disabled?: boolean
};

const Input = forwardRef<HTMLInputElement, IInputProps>(({
    category,
    type,
    id,
    disabled,
    ...rest
}, ref) => {

    const placeholder = category === 'task' ? 'add task' : category === 'date' ? 'due date' : 'add description';

    return (
        <div
            className='flex gap-2'
        >

            {category !== 'description' &&
                <Icon type={category === 'task' ? 'plus' : 'time'} />
            }

            <input
                ref={ref}
                id={id}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                className={[
                    'w-full h-6 placeholder:text-slate-500 placeholder:text-base hover:bg-slate-100 active:bg-slate-200',
                    category === 'description' ? 'mr-8' : 'mr-0'
                ].join(' ')}
            />
        </div>
    );
}
);

export default Input;
