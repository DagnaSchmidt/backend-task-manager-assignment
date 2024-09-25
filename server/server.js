import express from 'express';
import cors from 'cors';
import { tasksRouter } from './controllers/tasks.js';

const app = express();
app.use(cors());

app.listen(() => {
    console.log(`Server is running`);
});

app.use('/api/tasks', tasksRouter);
