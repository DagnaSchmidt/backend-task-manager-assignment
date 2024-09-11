import React from 'react';
import Icon from '../icon/Icon';

type TCheckboxProps = {
    isChecked: boolean,
    onClick: () => void
}

const Checkbox = ({
    isChecked,
    onClick
}: TCheckboxProps) => {

    return (
        <button
            onClick={onClick}
            className={[
                'rounded-lg',
                isChecked ? 'bg-slate-500' : 'border-2 border-slate-500'
            ].join(' ')}
        >
            <div
                className={isChecked ? 'opacity-100' : 'opacity-0'}
            >
                <Icon type='check' />
            </div>
        </button>
    );
};

export default Checkbox;
