import http from "http";
import { config } from "dotenv";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(200);
    res.end();
});

config();

server.listen(process.env.PORT);
