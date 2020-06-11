const http = require('http');
const mongoose = require ('mongoose');
const app = require('./app');
dbConfig = require('./database/db');
app.set('port', process.env.PORT || 3000)

const server = http.createServer(app);
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

server.listen(process.env.PORT || 3000);