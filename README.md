# NASA-Project

FE uses create-react-app
BE uses Node.js.

### MVC Pattern for our server

Keep related code together. Separate the code that deals with diff functionality.
Our controllers will live alongside our routes, since controller defines how we are going to respond to our routes. Routers and controllers are one to one.

Models will be in a separate folder. Models can be one to many, many to many, etc. In models our data doesn't necessarily match up with collections and functionality of our API, or how it is supposed to be accessed by our API. Model only ever works with the data based on however it's stored. Controller only uses the data provided by our model and puts it in a response that's useful for our client.

We'll start from server.js file, then separate express middleware to App.js file.

### Node http module with Express middleware

We use express as a listener function for our Node http server. This allows us to use our server not only responding to http requests, but also to use web sockets.

### Routes for each of our collections

Each collection has it's express.Router()
Router is a type of middleware that groups together related routes.
Each route gets its controller (function that responds to http request at that route)

We're building chain of middleware that handles our requests (whitelisted by cors, comes to express, gets checked for json content type if we're passing data, goes through express Routers that have controllers, that work with data models).

From the front end we make a built in the browser fetch request and await response promise to process json data; in our controller we're sending response as json data.

### Getting planets data from downloaded csv file

To populate data on startup, when our data is read asynchronously (from a stream here), we need a js Promise for our loading code and await for it to resolve before listening for requests from fe. On fe we are awaiting that data by also wrapping our server.listen in an async function and calling it.

### Automating Full Stack App with NPM

We have 3 jason.package files (for client, for server, in the root dir)
In scripts use 
`--prefix` to tell npm to run a command from a diff folder.
`&&` will run the first command to complete to start another one.
`&` will run commands simultaniously.

To run fe and be on one server, we move our production fe build in our server dir. In our clients build script we set up the variable `BUILD_PATH=<server dir/public>`.
Then we'll add another express middleware: 
`app.use(express.static(path.join(__dirname, '..', 'public')))`
so now it's express serving our fe, not create-react-app. So the port will change from 3000, to our server's 8000.
Then our app.get('*', (req, res) => {res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))})

We use `'*'` to handoff the routing from our backend express router to our fe react router. Index.html will be served and use HTML5 pushState API.

Then we combine client's build script and server's start script under our app's deploy script.

### Log requests with Morgan middleware

### Launches Model

We'll use js [Map object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) for our data structure. It holds key-value pairs and remembers the original insertion order of the keys. ANY value (obj or primitives) can be used either as a key or a value.

### Layered Architecture based on Separation of Concerns

<img width="351" alt="Screen Shot 2023-01-09 at 8 23 38 PM" src="https://user-images.githubusercontent.com/81769855/211454893-57249917-8dc1-47e5-afda-d74c2843cdb5.png">

### App Architecture

<img width="769" alt="Screen Shot 2023-01-09 at 1 32 19 PM" src="https://user-images.githubusercontent.com/81769855/211930491-fcbc212f-fe60-4897-b4d1-2ba5f6d5f5b7.png">





