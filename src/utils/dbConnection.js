import { connect } from "mongoose";
export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://francrema00:1ETVneUJdphWILl5@back-end-coder.z1w3cli.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("plug to mongo!");
  } catch (e) {
    console.log(e);
    throw "can not connect to the db";
  }
}
