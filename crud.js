import dbclient from './dbclient.js'

import {ObjectId} from 'mongodb'



const createStudent = async (stuobj) => {
return await dbclient.db('management').collection('students').insertOne(stuobj)
}

const createMentor = async(mentobj) => {
return await dbclient.db('management').collection('mentors').insertOne(mentobj)
}

const addStudent = async(mentid,addobj) =>{
    


const student = await dbclient.db('management').collection('students').findOne({'name':addobj.students})

// console.log(stu)

if(student.mentor === ''){
    return await dbclient.db('management').collection('mentors').updateMany({_id : new ObjectId (mentid)},{$push:addobj})

}

else{
    return ({'msg' : 'mentor exist '})
}

}

const studentsList = async(id) => {

    const list=  await dbclient.db('management').collection('mentors').findOne({_id : new ObjectId(id)},{'students':1})
    return({'students':list.students})
}


const updateMentor = async(mentorid,mentorname) =>{

    const previousmentor = await dbclient.db('management').collection('students').findOne({'_id' : new ObjectId(mentorid)},{'mentor':'1'})
 
return await dbclient.db('management').collection('students').updateMany({'_id':new ObjectId(mentorid)},{$set:{'previous_mentor':previousmentor.mentor,'mentor':mentorname}})
}


const prevMentor = async(studentid) => {

    
    const previous_mentor =  await dbclient.db('management').collection('students').findOne({'_id':new ObjectId(studentid)},{'previous_mentor':1})
return ({'previous_mentor' : previous_mentor.previous_mentor})
}




export {createStudent,createMentor,addStudent,studentsList,updateMentor,prevMentor}