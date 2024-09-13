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
        <div>

            {category !== 'description' &&
                <Icon type={category === 'task' ? 'plus' : 'time'} />
            }

            <input
                ref={ref}
                id={id}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />
        </div>
    );
}
);

export default Input;
