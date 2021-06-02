const { Router } = require('express');

const router = Router();

const articles = [
    { id : 1, name : 'Article' }
];

/* GET articles listing. */
router.get('/articles', (req, res, next) => {
    res.json(articles);
});

/* GET article by ID. */
router.get('/articles/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const article = articles.find(article => (article.id === id));
    if (article) {
        res.json(article);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;
