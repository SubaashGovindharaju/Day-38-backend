import express from 'express';
import userRouter from './routes/users.js';
import connectToDb from './db-utils/mongoos-connection.js';


const app = express();
const PORT =process.env.PORT || 6000;
await connectToDb();

app.use(express.static('public'));
app.use(express.json());
app.use('/api/users',userRouter);



app.listen(PORT, () => {
    console.log('started');
});