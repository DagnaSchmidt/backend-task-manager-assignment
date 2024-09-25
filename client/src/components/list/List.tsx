import React from 'react';
import { TTaskProps } from '../../types/types';
import Task from '../task/Task';

interface IListProps {
    list: TTaskProps[]
};

const List = ({
    list
}: IListProps) => {
    console.log(list)
    return (
        <div
            className='flex flex-col py-8 gap-2'
        >
            {list.map(i => <Task key={i.id} {...i} />)}
        </div>
    );
};

export default List;
