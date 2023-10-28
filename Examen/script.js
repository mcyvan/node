var final=[];
async function Con(){
    var url='http://localhost:3000/';
    await fetch(url,{
        method: "GET"
    })
    .then
        (response => response.json())
    .then
        (json=>{
            final=json
        }
    )
}        



function Guerrero(nombre){
    var div=document.getElementById("armas");    
    div.innerHTML='';
    let armas =[]
    for (let i=0; i<final.length;i++){
        if(final[i].clase == nombre){
            armas = final[i].armas;
        }
        
    }
    for(var i =0; i<armas.length; i++){
        var check = document.createElement("INPUT");
        var label = document.createElement("label");
        check.type="checkbox";
        label.value="checkbox";
        check.innerHTML=armas[i];
        label.innerHTML=armas[i];  
        div.appendChild(check);
        div.appendChild(label);
    }
}


function Paladin(nombre){
    var div=document.getElementById("armas");    
    div.innerHTML='';
    let armas =[]
    for (let i=0; i<final.length;i++){
        if(final[i].clase == nombre){
            armas = final[i].armas;
            for(var j =0; j<armas.length; j++){
                var check = document.createElement("INPUT");
                var label = document.createElement("label");
                check.type="checkbox";
                label.value="checkbox";
                label.innerHTML=armas[j];    
                div.appendChild(check);
                div.appendChild(label);
            }
        }
        
    }
    
}
