import mongoose from 'mongoose';

const DB_URL = process.env.DB_CONNECTION_URL;

global.mongoose = {
  conn: null,
  promise: null,
};

async function connectionToDB() {
  // exiting connection
  if (global.mongoose && global.mongoose.conn) {
    return mongoose.conn;
  } else {
    const promise = mongoose.connect(DB_URL).then((mongoose) => mongoose);
    global.mongoose = {
      conn: await promise,
      promise,
    };
    return await promise;
  }
}

export default connectionToDB;
