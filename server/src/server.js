const http = require('http');

const app = require('./app');
const mongoose = require('mongoose');

const { loadPlanetsData } = require('./models/planets.model');

PORT = process.env.PORT || 8000;

const MONGO_URL =
  'mongodb+srv://NASA-API:WugYAjwuBTy5j00R@nasa-cluster.w0b09df.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();
