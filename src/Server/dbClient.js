import { Client } from 'pg';

const client = new Client({
    user: 'user',
    password: 'password123',
    database: 'user',
    host: 'localhost',
    port : 5432
});

client.connect();


