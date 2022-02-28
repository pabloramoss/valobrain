/* import mongoose from 'mongoose';

const dbConnect = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGODB_URI);
  return handler(req, res);
};

export default dbConnect; */
import {connect, connection} from "mongoose"

const conn = {
  isConnected: 0
}

export async function dbConnect() {
  if (conn.isConnected === 1) return
  const db = await connect(process.env.MONGODB_URI)
  conn.isConnected = db.connections[0].readyState
  console.log(db.connection.db.databaseName)
}

connection.on("connected", ()=> {
  console.log("mongode is connected")
})
connection.on("error", (err)=> {
  console.log(err)
})