const {sequelize} = require('./db.js')
const cors = require('cors');
const Express = require('express')
const router = require('./routes/index.js'); 
require('dotenv').config()


const app = Express()
const port = process.env.PORT


app.use(
    cors({
      credentials: true,
      origin:` http://localhost:${port}`,
    })
  );
  
app.use(Express.json());
app.use('/api', router);
//app.use(errorMiddleware);


const start = async() => {

    try {

        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        console.log('Соединение с БД было успешно установлено')

        app.listen(port, () => console.log('Сервер работает на порту:', port))

    } catch (error) {
        console.log(error);
    }

}

start()