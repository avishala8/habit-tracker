const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", true);
// const app = express();

dotenv.config({ path: "./config.env" });
const db = process.env.DATA;
mongoose
  .connect(db, {
    ///returns a promise and should be handled
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful");
  });
// mongoose.connect('mongodb://127.0.0.1/todo_list_db');
// const db = mongoose.connection;
// // error
// db.on('error',console.error.bind(console,'erroe connecting to db'));
// // up and running then message
// db.once('open',function(){
//     console.log('Success fully connected to the database')
// })
