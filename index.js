const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const appConfig = require('./configs/app');
const indexRoute = require('./routes/index');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://test:1234@cluster0-unzy7.mongodb.net/', { 
  dbName: 'Test', useNewUrlParser: true 
})

const app = new Koa();
app.use(bodyParser());
app.use(indexRoute.routes());
const server = app.listen(appConfig.NODE_PORT).on('error', err => {
  console.log(err);
});
module.exports = server;