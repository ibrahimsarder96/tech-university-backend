import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1', router);
app.use('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    messege: 'welcome to tech university backend',
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
