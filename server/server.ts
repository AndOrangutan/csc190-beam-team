import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });
const supaurl = process.env.SUPA_URL;
const supakey = process.env.SUPA_KEY;
const port = process.env.PORT;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

declare const process: {
  env: {
    SUPA_URL: string;
    SUPA_KEY: string;
    PORT: string;
  };
};

export const supabase = createClient(supaurl, supakey);

app.use('/users', require('./routes/userRoutes'));
app.use('/routes', require('./routes/routesRoutes'));
app.use('/locations', require('./routes/locationsRoutes'));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
