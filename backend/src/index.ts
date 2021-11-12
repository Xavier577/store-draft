import http from "http";
import app from "./app";

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
