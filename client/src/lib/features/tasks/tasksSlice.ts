import { createSlice } from '@reduxjs/toolkit';
import { TTaskProps } from '../../../types/types';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        {
            id: '098474',
            title: 'Set up database',
            description: 'Create account on mongo DB atlas and connect it to repo.',
            dueDate: new Date(),
            isDone: false
        },
        {
            id: '09dw74',
            title: 'Create API endpoints',
            description: 'Create account on mongo DB atlas and connect it to repo.',
            dueDate: new Date(),
            isDone: true
        }
    ],
    reducers: {
        // fetch from DB
        // setReducerTasks(state, action) {
        //     const newState = action.payload;
        //     return newState;
        // },
        addReducerTask(state, action) {
            const newState = state.push(action.payload);
            // return newState;
        },
        deleteReducerTask(state, action) {
            const newState = state.filter(i => i.id !== action.payload);
            return newState;
        },
        checkReducerTaskAsDone(state, action) {
            const newState = state.map((i) => {
                if (i.id !== action.payload) {
                    return i;
                } else {
                    return {
                        ...i,
                        isDone: true
                    }
                }
            });
            return newState;
        }
    }
});


// export const setTasks = () => {
//     return async dispatch => {
//         const newTasks = await getTasks();
//         dispatch(setAllReducerStories(newTasks));
//     }
// };

// export const addTask = (taskContent: TTaskProps) => {
//     return dispatch => {
//         // const newStory = await createNewTask(taskContent);
//         // dispatch(addReducerTask(newStory));
//         dispatch(addReducerTask(taskContent));
//     }
// };

// export const deleteStory = (id: string) => {
//     // return dispatch => {
//     //     // eslint-disable-next-line
//     //     // const deletedStory = await deleteOneStory(id);
//     //     // dispatch(deleteReducerStory(id));
//     //     dispatch(deleteReducerTask(id));
//     // }
// };

export const { addReducerTask, deleteReducerTask, checkReducerTaskAsDone } = tasksSlice.actions;
export default tasksSlice.reducer;
