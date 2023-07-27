import mongoose from "mongoose";
import studentModel from "./src/models/student.model.js";
import courseModel from "./src/models/course.model.js";

const uri = 'mongodb://127.0.0.1:27017'

try {
    await mongoose.connect(uri, {
        dbName: 'advance1'
    })
    console.log('DB connected!')

    // CREO AL ESTUDIANTE
    // await studentModel.create({
    //     first_name: 'Josias',
    //     last_name: 'Flier',
    // })

    // CREO EL CURSO
    // await courseModel.create({
    //     title: 'Backend',
    //     professor: 'Alex Marin'
    // })

    // LE ASIGNO AL ESTUDIANTE EL CURSO
    // const student = await studentModel.findOne({ _id:'64c222167e53be9ce06df2b1'})
    // student.courses.push({ course: '64c2254257f9374e0ddd8f0f'})
    // const result = await studentModel.updateOne({ _id:'64c222167e53be9ce06df2b1'}, student)

    // FILTRO AL ESTUDIANTE PARA VERLO EN CONSOLA
    const student = await studentModel.findOne({ _id:'64c222167e53be9ce06df2b1'})
    console.log(JSON.stringify(student, null, '\t'))

} catch (err) {
    console.log(err.message)
}