
// Que es express
const con= require("express");
// Que es con ()
const app= con();

const Animales= [
    {Id: "An01", Especie:"Canina", Raza: ["Chihuahua","Pitbull", "Border"] },
    {Id: "An02", Especie:"Felino", Raza: ["Siames","Egipcio", "Callejero"] }
];
function Autorizar(req,res, next){
    
    const Token="A1C2E3";
    const F1= req.headers.authorization;
    if(F1===Token){
        next();        
    }else{
        res.send("No hay autorizacion");
    }
}

const Port=3000;

app.get("/", Autorizar, (req, res)=>{
    res.json(Animales);
})

app.listen(Port, ()=> console.log("Escuchando en el puerto: "+ Port));