import pg from 'pg';
const { Client } = pg;
const client = new Client({
    user: 'postgres',
    password: 'pass',
    database: 'employee_db_tracker'
});
await client.connect();
export default client;
//# sourceMappingURL=connection.js.map