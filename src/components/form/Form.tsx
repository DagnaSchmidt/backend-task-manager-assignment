'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReducerTask } from '@/lib/features/tasks/tasksSlice';
import { TTaskProps } from '@/types/types';
import Input from '../input/Input';
import Button from '../button/Button';

const Form = () => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState<boolean>(true);
    const [formData, setFormData] = useState<TTaskProps>({
        id: '',
        title: '',
        isDone: false
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        try {
            dispatch(addReducerTask(formData));
            setFormData({
                id: '',
                title: '',
                isDone: false
            });
            window.alert(`Story ${formData.title} added!`);
        } catch (exception) {
            console.log('failed to add new task');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-6 bg-slate-300 p-3 rounded-lg mt-12'
        >
            <div
                className='flex justify-between'
            >
                <Input
                    category='task'
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleInputChange}
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
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <Input
                        category='date'
                        id='dueDate'
                        type='date'
                        name='dueDate'
                        value={formData.dueDate}
                        onChange={handleInputChange}
                    />
                </>
            }
        </form>
    );
};

export default Form;
