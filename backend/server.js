const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const profileRouter = require('./routes/profileRoutes')
const userRouter = require('./routes/userRoutes')
const connectDB = require('./config/db')
const cors = require('cors')

const port = process.env.PORT || 5000

connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/profile', profileRouter)
app.use('/api/users', userRouter)


app.use(errorHandler)

app.listen(port, () => console.log(`server running on port ${port}`))