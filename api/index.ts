import express from 'express';
import contentRouter from './routes/content';
import externalRouter from './routes/external';

// Create express instance
const app = express();
app.use(contentRouter);
app.use(externalRouter);


// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`)
    });
}