import './polyfill';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();

// parser
app.use(express.json());
// app.use(cors());
app.use(cookieParser());

// app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(
  cors({
    origin: [
      'https://re-sell-bd-client.vercel.app',
      'https://product-reselling-frontend.vercel.app',
      'http://localhost:3000',
      'http://localhost:5173',
      'https://product-reselling-frontend.vercel.app'
    ],
    credentials: true,
  }),
);

// application routes
app.use('/api/v1', router);

// check server health
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running...');
});

// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

export default app;
