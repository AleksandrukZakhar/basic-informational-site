import { readFile } from "fs/promises";
import http from "http";
import { config } from "dotenv";

let html;

const server = http.createServer(async (req, res) => {
    if (req.url === "/" || req.url === "/about" || req.url === "/contact") {
        if (req.url === "/") {
            try {
                html = await readFile("./src/pages/home.html");
            } catch (err) {
                console.log(err);
            }
        } else if (req.url === "/about") {
            try {
                html = await readFile("./src/pages/about.html");
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                html = await readFile("./src/pages/contact.html");
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        try {
            html = await readFile("./src/pages/404.html");
        } catch (err) {
            console.log(err);
        }
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
});

config();

server.listen(process.env.PORT);
