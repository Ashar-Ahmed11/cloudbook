const connectToMongo = require('./db')
connectToMongo()


const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;



app.use(cors())

app.use(express.json())

//ROUTES::
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


if (process.env.NODE_ENV == "production") {

    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})