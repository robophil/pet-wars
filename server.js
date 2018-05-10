const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Pusher = require('pusher')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

const pusher = new Pusher({
  appId: 'app_id',
  key: 'key',
  secret: 'secret',
  cluster: 'cluster',
  encrypted: true
})

let dogs = 0
let cats = 0
let hamsters = 0

const getPercentage = value => (value * 100) / (dogs + cats + hamsters)

app.post('/vote', function (req, res) {
  const {vote} = req.body
  if (vote === 'dogs') {
    dogs++
  }
  if (vote === 'cats') {
    cats++
  }
  if (vote === 'hamsters') {
    hamsters++
  }
  pusher.trigger('pet-wars', 'new-votes', [getPercentage(dogs), getPercentage(cats), getPercentage(hamsters)])
  res.sendStatus(200)
})

app.listen(port, function () {
  console.log('Node app is running at localhost:' + port)
})
