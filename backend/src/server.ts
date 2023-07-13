import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
var path = require('path');
var createError = require('http-errors');
var logger = require('morgan');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Routes
var categoriesRouter = require('./routes/categories.route');
var bannersRouter = require('./routes/banners.route');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/banners', bannersRouter);

// catch 404 and forward to error handler
// app.use(function(req: Request, res: Response, next: NextFunction) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;