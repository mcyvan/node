var data;
// la funcion trabaja a destiempo
async function Conexion(){
    const api="http://localhost:3000/Gatos";
    await fetch(api,
        {
            method: "GET",
            headers:{
                "authorization":"A1C2E3"
            }
        }
        ).then(response => response.json())
    .then(json => {
        console.log(json);
        data=json;
    })
}

function Show(){
    var main=document.getElementById("Muestra");
    main.innerHTML=data;
}