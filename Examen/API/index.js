const express = require('express');
const app=express();

const port=3000;
const cors=require("cors");
app.use(cors(
    {
        origin:'*',
        methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }
));

const final = [
	{
		clase: "guerrero",
		atributos: {
			fuerza: 15,
			destreza: 20,
			inteligenia: 10,
			carisma: 13,
			suerte: 8
		},
		armas:["hacha", "espada", "escudo"]	
	},
	{
		clase: "paladin",
		atributos: {
			fuerza: 14,
			destreza: 15,
			inteligenia: 16,
			carisma: 20,
			suerte: 12
		},
		armas:["baculo", "espada", "escudo"]
	}
];

app.get('/',(req, res)=>{
	res.json(final)
});

for(let i=0;i<final.length;i++){
    app.get('/'+final[i].clase,(req, res)=>{
        res.json(final[i]);
    })    
}

app.listen(port,()=>{console.log("escuchando puerto")});