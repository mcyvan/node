var Data;
var links=[];

async function Conexion(){
    var url="http://localhost:3003";
  await fetch(url,
    {
        method: "GET",
        headers:{
            "authorization":"123456"
        }
    }).then(response=>response.json())
    .then(json=>{Data=json});
}

function Show(){
    var div=document.getElementById("main");
    for (let i=0; i<Data.length;i++){
    var h1=document.createElement("h1");
    h1.innerHTML=Data;
    div.style.color="#af00ff";    
    div.appendChild(h1);
    }
}

function Extract(){
    links=document.getElementsByTagName("a");
    links[0].innerHTML="Google";
}