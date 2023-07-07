import  express  from "express";
import { addStudent, createMentor, createStudent, prevMentor, studentsList, updateMentor } from "./crud.js";


const app = express()

app.use(express.json());

const port = '5000';


app.post('/student',async(req,res) =>{
    const stuodj = req.body 
    console.log(stuodj)
    await createStudent(stuodj)
    res.send('created successfully')
})

app.post('/mentor', async(req,res) => {
    const mentobj = req.body
    await(createMentor(mentobj))
    res.send('mentor created successfully')
})

app.put('/mentor/:id',async (req,res) => {
    const {id} = req.params
    const addobj = req.body
    console.log(id)
    console.log(req.body)
    // await addStudent(id,addobj);
    res.send(await addStudent(id,addobj))
})

app.get('/mentor/:id',async(req,res) =>{
    const {id} = req.params
    res.send(await studentsList(id))
})

app.put('/students/:id',async(req,res) => {
    const {id} = req.params
    const mentorname = req.body.mentor
    await updateMentor(id,mentorname)
    res.send('updated')
})

app.get('/student/:id', async(req,res) => {
    const {id} = req.params

    res.send(await prevMentor(id))
})


app.listen(port,() => {
    console.log(`http://localhost/${port}`)
})