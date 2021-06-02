const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.send('API BullCoin v1<br><br><a href="https://github.com/djmarvels">by Valery</a>');
});

module.exports = router;
