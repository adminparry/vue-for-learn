const express = require('express');
const history = require('connect-history-api-fallback');
const proxy = require('express-http-proxy');

const app = express();
const proxyAddress = 'big-middle-platform.herokuapp.com';

app.use('/api', proxy(proxyAddress, {
    https: true,
    proxyReqPathResolver: function (req) {
        return req.url.replace(/api/, '');
    }
}));
const staticFileMiddleware = express.static('dist');
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(staticFileMiddleware);
const PORT = process.env.PORT || 8080;

app.listen(PORT)