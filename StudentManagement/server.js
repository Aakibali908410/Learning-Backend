const http = require('http');
const students = require('./students');
const url = require('url');

const PORT = 5060;

const server = http.createServer((req, res) => {

    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;
    const method = req.method;

    if (path === '/students' && method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(students));
    }

    else if(path.startsWith('/students/') && method === "GET"){
        const id= parseInt(path.split("/")[2]);
        const student=students.find(s => s.id === id);

        if(student){
            res.writeHead(200,{'Content-type': 'application/json'});
            res.end(JSON.stringify(student));
        }
        else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Route Not Found');
        }
    }

    else if(path === "/students" && method === "POST"){
        let body="";

        req.on("data", chunk =>{
            body += chunk.toString();
        })
        req.on("end",()=>{
            const newStudent=JSON.parse(body);
            newStudent.id=Date.now();
            students.push(newStudent);

            res.writeHead(201, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(newStudent));
        })
    }

    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Route Not Found');
        }
});

server.listen(PORT, () => {
    console.log(`Server got started on the port ${PORT}`);
});