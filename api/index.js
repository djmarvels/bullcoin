const express = require('express');

// Create express instance
const app = express();

// Require API routes
const main = require('./routes/index');
const articles = require('./routes/articles');

// Import API Routes
app.use(articles);
app.use(main);

module.exports = app;

if (require.main === module) {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`);
    });
}
