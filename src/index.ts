let http = require("http");
import {Request, Response} from 'express'
import { whatsapp } from './twilio';

http.createServer(function(req: Request, res:Response){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("mofo")
}).listen(8081);

whatsapp()

console.log("listening at localhost 8081");