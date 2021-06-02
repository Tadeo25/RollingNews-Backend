import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import noticiasRoutes from './routes/noticias.routes';
import usersRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';

//Setup
//Creo una instancia de expression
const app = express();
//const bcryptjs = requiere('bcryptjs');

//Creo puerto para ejecutar mi backend
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log("I'm your backend " + app.get('port'));
});

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/noticias', noticiasRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/login', loginRoutes);