import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"


async function listenner (request, response) {
    await jsonHandler(request, response)
    routeHandler(request, response)
}

http.createServer(listenner).listen(3333)
