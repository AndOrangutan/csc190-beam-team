import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

declare const process : {
    env: {
        SUPA_URL: string,
        SUPA_KEY: string,
        PORT: string,
    }
}
const supaurl = process.env.SUPA_URL
const supakey = process.env.SUPA_KEY
const port = process.env.PORT;


const supabase = createClient(supaurl, supakey)

app.get('/', (req: Request, res: Response) => {
    // res.send('Server bob');
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', async (req: Request, res: Response) => {
    // get all users?
    // https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910
    const {data, error} = await supabase
        .from('users')
        .select()
    res.send(data)
})

// get user by id
// post user
// put user by id
// delete user by id


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
