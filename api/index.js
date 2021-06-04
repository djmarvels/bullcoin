const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;

// Create express instance
const app = express();

// Connect to database
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });

mongoClient.connect(function(err, client){
  if(err) return console.log(err);
  app.locals.client = client;
  // app.locals.collection = client.db("main").collection("articles");
  console.log('Success connect to mongodb');
  if (require.main === module) {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`API server listening on port ${port}`);
    });
  }
});

// Require API routes
const main = require('./routes/index');
const articles = require('./routes/articles');

// Import API Routes
app.use(articles);
app.use(main);
app.use(bodyParser.json({ type: 'application/*+json' }));

module.exports = app;

process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
