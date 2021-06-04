const { Router } = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const router = Router();

/* GET articles */
router.get('/articles', (req, res, next) => {
    const collection = req.app.locals.client.db('main').collection('articles');
    collection.find({}).toArray((err, articles) => {
      if(err) return console.log(err);
      res.send(articles);
    });
});

/* GET article. */
router.post('/article/get', jsonParser, (req, res, next) => {
    if(!req.body) return res.sendStatus(400);
    if(!req.body.id) return res.sendStatus(422);
    const collection = req.app.locals.client.db('main').collection('articles');
    collection.findOne({ id: +(req.body.id) }, (err, article) => {
      if(err) return console.log(err);
      if (!article) {
        res.sendStatus(404);
      } else {
        res.send(article);
      }
    });
});

/* ADD article. */
router.post('/article', jsonParser,(req, res) => {
  if(!req.body) return res.sendStatus(400);
  if(!req.body.title) return res.sendStatus(422);
  if(!req.body.content) return res.sendStatus(422);

  const collection = req.app.locals.client.db('main').collection('articles');

  let ArticlesCount = 0;
  collection.find({}).toArray((err, articles) => {
    if(err) return console.log(err);
    ArticlesCount = articles.length + 1;
  });

  collection.insertOne({
    id: ArticlesCount + 1,
    title: req.body.title,
    content: req.body.content
  }, (err, article) => {
    if(err) return console.log(err);
    res.send(article);
  });
});

/* SAVE article. */
router.post('/article/save', jsonParser, (req, res) => {
  if(!req.body) return res.sendStatus(400);

  if(!req.body.title) return res.sendStatus(422);
  if(!req.body.content) return res.sendStatus(422);
  if(!req.body.id) return res.sendStatus(422);

  const collection = req.app.locals.client.db('main').collection('articles');

  collection.update({
    id: +(req.body.id)
  }, {
    $set: {
      title: req.body.title,
      content: req.body.content
    }
  }, (err, article) => {
    if(err) return console.log(err);
    res.send(article.result);
  });
});

/* DELETE article. */
router.post('/delete/article', jsonParser, (req, res) => {
  if(!req.body) return res.sendStatus(422);

  const collection = req.app.locals.client.db('main').collection('articles');
  collection.deleteOne({ id: req.body.id },  (err, result) => {
    if(err) return console.log(err);
    res.json(result);
  })
});

module.exports = router;
