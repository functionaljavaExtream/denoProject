import { Pool } from "https://deno.land/x/postgres@v0.4.3/mod.ts";
import { PoolClient } from "https://deno.land/x/postgres@v0.4.3/client.ts";

const POOL_CONNECTIONS = 20;
const dbPool = new Pool({
  user: 'postgres',
  password: '890kim@jp',
  database: 'test',
  hostname: 'localhost',
  port: 5432,
},POOL_CONNECTIONS);




async function runQuery (query: string) {
    const client: PoolClient = await dbPool.connect();
    const dbResult = await client.query(query);
    client.release();
    return dbResult
  }



export {dbPool,runQuery}