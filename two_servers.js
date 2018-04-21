const http = require("http")

const PORT_ONE = 7000;
const PORT_TWO = 7500;

function handleRequestGood(request, response) {
    response.end("Good Response: You Are An Amazing Web Developer " + request.url);

}

function handleRequestBad(request, response) {
    response.end("Bad Response: You Are As Clumsy As You Are Stupid " + request.url);

}

//Creates a server 
const server_one = http.createServer(handleRequestGood);

const loggerOne = () => console.log("Server listening on http://localhost:" + PORT_ONE)

server_one.listen(PORT_ONE, loggerOne)

const server_two = http.createServer(handleRequestBad);

const loggerTwo = () => console.log("Server listening on http://localhost:" + PORT_TWO)

server_two.listen(PORT_TWO, loggerTwo)