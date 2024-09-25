import express from 'express';
import cors from 'cors';
import { tasksRouter } from './controllers/tasks.js';

const app = express();
app.use(cors());

app.listen(8080, () => {
    console.log(`Server is running on 8080 port`);
});

app.use('/api/tasks', tasksRouter);
