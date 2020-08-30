import {serve, Server, ServerRequest} from "https://deno.land/std@0.66.0/http/server.ts";
import {dbPool,runQuery}from "./db/index.ts";

const s: Server  = serve({port:8080});

console.log("Started at http://localhost:8080");

for await (const req: ServerRequest of s) {
    if(req.url === '/api/v1/denoReact'){
        const results = await runQuery("select * from yelp.restaurant");
        console.log(results);
    }else if(req.url === '/about') {
        req.respond({body: "About Me"})
    }
}

