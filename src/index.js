import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import noticiasRoutes from './routes/noticias.routes';

//Setup
//Creo una instancia de expression
const app = express();

//Creo puerto para ejecutar mi backend
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log("I'm your backend " + app.get('port'));
});

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));


//Rutas
// app.get('/', (req, res)=>{
//     res.send("Hola desde el servidor");
// });
app.use('/api/noticias', noticiasRoutes);