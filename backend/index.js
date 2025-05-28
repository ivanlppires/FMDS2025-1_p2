import express from 'express'
import cors from 'cors'
import log from './middleware/log'
import StudentsRoutes from './routes/StudentsRoutes'
import swagger from './config/swagger'

const app = express();

//Swagger
swagger(app)

//Middlewares
app.use(express.json())
app.use(cors())
app.use(log)

// Rotas
app.use('/students', StudentsRoutes)

//Put server to listen
app.listen(5000, () => { console.log('Server running')})