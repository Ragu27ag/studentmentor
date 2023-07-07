
import { MongoClient } from 'mongodb'




// const dburl = 'mongodb://0.0.0.0:27017/'

const dbcloudurl = process.env.CONNECTION_URL

const client = new MongoClient(dbcloudurl)
client.connect()
console.log('connected to db')


export default client