
import { MongoClient } from 'mongodb'




const dburl = 'mongodb://0.0.0.0:27017/'

const client = new MongoClient(dburl)

console.log('connected to db')


export default client