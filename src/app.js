import express, {json} from 'express'
const app = express()
import bodyparser from 'body-parser'
import router from './routes'

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(json())

app.use('/api', router)

app.listen(6000, () => {console.log('server is listening at port 6000')})