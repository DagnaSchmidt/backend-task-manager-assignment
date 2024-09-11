'use client'
import React, { useState } from 'react';
import Icon from '../icon/Icon';

const Task = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div
            className='flex flex-col'
        >

            <div
                className='flex justify-between'
            >
                <div>
                    {/* checkbox */}
                    <p>Task title</p>
                </div>
                <div
                    className='flex gap-2'
                >
                    <p>due date</p>
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
                        description
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
