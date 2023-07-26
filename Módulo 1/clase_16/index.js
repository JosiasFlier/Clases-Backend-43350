import mongoose from "mongoose";
import studentModel from "./src/models/student.model.js";

const uri = 'mongodb://localhost:27017'

try {
    await mongoose.connect(uri, {
        dbName: 'advance1'
    })
    console.log('DB connected!')

    await studentModel.create({
        first_name: 'Josias',
        last_name: 'Flier',
    })

} catch (err) {
    console.log(err.message)
}