const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const jiraRouter = require('./routes/jiraRouter');
const neo4jRouter = require('./routes/neo4jRouter');

const app = express();

app.listen(3010);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// a middleware to disable cors
// always executed when the app is used (could be filtered for a specific path via an additional first parameter too)
app.use((req, res, next) => {
  //manipulate the header of the response
  // * : no matter on which domain this response is coming from on this server: disable cors
  res.setHeader("Access-Control-Allow-Origin", "*");
  // the incoming requests may have these headers:
  res.setHeader("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  // allow these methods:
  res.setHeader("Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

app.use('/', indexRouter);
app.use('/api/jira', jiraRouter);
app.use('/api/neo4j', neo4jRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Frontend
// comment out all code down below if you don't want to serve the frontend via express
let server = express()
// built in middleware to serve static content just as images, css, html etc
server.use(express.static(path.join(__dirname, 'traceapp-UI/dist/traceapp-UI')));
const {
  createProxyMiddleware
} = require('http-proxy-middleware')

server.use('/api', createProxyMiddleware({
  target: 'http://localhost:3010',
  secure: false,
  changeOrigin: true
}));

server.use('/updateproject', createProxyMiddleware({
  target: "http://localhost:5000",
  secure: false,
  changeOrigin: true
}));

// all get requests will point to angular's index.html in dist folder
server.get('/*', async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'traceapp-UI/dist/traceapp-UI', 'index.html'));
});

server.listen(3020, () => console.log('App Running on port 3020'));

module.exports = app;
