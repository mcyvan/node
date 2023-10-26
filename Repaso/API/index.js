// crear json basico
// npm init
// npm install express
// npm install cors express nodemon
// node index.js para ejecutar server
// conexion con los modulos de express
const express=require('express');

// traerse las funciones de express
const app=express();

// solicitar el cors
const cors=require('cors');

// definicion del puerto
const port=3003;

function Auth(req,res, next){
    
    const Token="123456";
    const F1= req.headers.authorization;
    if(F1===Token){
        next();        
    }else{
        res.send("No hay autorizacion");
    }
}

app.use(cors(
    {
        origin:'*', // todos pueden entrar al API
        method:['GET','POST','DELETE','UPDATE']
    }
));



// arreglo de objetos
const Datos=[
    {id:1, nombre: 'Juan',apellido:'Perez', edad: 25},
    {id:2, nombre: 'Maria',apellido:'Gomez', edad: 35},
    {id:3, nombre: 'Pedro',apellido:'Rivas', edad: 28},
    {id:4, nombre: 'Fernanda',apellido:'Arismendi', edad: 19}
];

app.get('/',Auth,(req,res)=>{
    res.json(Datos);
})

for (let i=0;i<Datos.length;i++){
    app.get('/'+Datos[i].nombre,Auth,
    (req,res)=>{
        res.json(Datos[i]);
    })  
}

app.listen(port, ()=>{ console.log("escuchando el puerto")})