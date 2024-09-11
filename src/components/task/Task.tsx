'use client'
import React, { useState } from 'react';
import { TTaskProps } from '@/types/types';
import Icon from '../icon/Icon';

const Task = ({
    title,
    description,
    dueDate,
    isDone
}: TTaskProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div
            className={[
                'flex flex-col',
                isDone ? 'text-slate-500' : 'text-slate-900'
            ].join(' ')}
        >

            <div
                className='flex justify-between'
            >
                <div>
                    {/* checkbox */}
                    <p
                        className={[
                            'text-base tracking-wide',
                            isDone ? 'line-through font-light' : 'font-semibold'
                        ].join(' ')}
                    >
                        {title}
                    </p>
                </div>
                <div
                    className='flex gap-2'
                >
                    <p
                        className={[
                            'text-sm font-light',
                            isDone ? 'line-through' : ''
                        ].join(' ')}
                    >
                        {dueDate?.toString().slice(3, 10)}
                    </p>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Icon type='resizer' />
                    </button>
                </div>
            </div>

            {isOpen &&
                <div
                    className='flex flex-col'
                >
                    <p
                        className='px-8 py-6'
                    >
                        {description}
                    </p>

                    <div
                        className='self-end'
                    >
                        <button>delete</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Task;
