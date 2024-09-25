import express from 'express';
export const tasksRouter = express.Router();

const initialTasks = [{
    id: '098474',
    title: 'BACKEND DB Set up database',
    description: 'Create account on mongo DB atlas and connect it to repo.',
    dueDate: new Date(),
    isDone: false
},
{
    id: '09dw74',
    title: 'BACKEND DB Create API endpoints',
    description: 'Create account on mongo DB atlas and connect it to repo.',
    dueDate: new Date(),
    isDone: true
}];

tasksRouter.get('/', async (request, response) => {
    const stories = initialTasks;
    response.json(stories);
});
