'use client'
import React, { useState } from 'react';
import { TTaskProps } from '@/types/types';
import Input from '../input/Input';
import Button from '../button/Button';

const Form = () => {
    const [isActive, setIsActive] = useState<boolean>(true);

    return (
        <div
            className='w-full flex flex-col gap-6'
        >
            <div
                className='flex justify-between'
            >
                <Input
                    category='task'
                    id='task'
                />
                {isActive &&
                    <Button
                        type='add'
                        label='add'
                    />
                }
            </div>
            {isActive &&
                <>
                    <Input
                        category='description'
                        id='description'
                    />
                    <Input
                        category='date'
                        id='date'
                    />
                </>
            }
        </div>
    );
};

export default Form;
