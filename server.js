require('dotenv').config()
const express = require('express');
const app = express()

const mongoCred = `mongodb+srv://${process.env.userName}:${process.env.password}@${process.env.clusterName}.cpkby.mongodb.net/${process.env.databaseName}`

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
  
app.listen(process.env.PORT, () => {
  console.log(`running service a port ${process.env.PORT}`)
})

console.log('cred ->',mongoCred)