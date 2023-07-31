import mongoose from "mongoose";
import userModel from "./src/models/user.model.js";

await mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'Clase_17'})
console.log('DB Connected')

// const users = await userModel.find({ gender: "Female" })
const users = await userModel.paginate({ gender: "Female" }, {page: 1, limit : 5})

console.log(users)

process.exit()