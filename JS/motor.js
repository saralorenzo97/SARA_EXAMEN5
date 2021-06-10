var contadorC=0;

var fruta=[
    {
    imagen:"IMG/broccoli1.png",
    nombre:"Brócoli",
    precio:"0.80"
},
{
    imagen:"IMG/kale2.png",
    nombre:"Escarola",
    precio:"3.00"
},

{
    imagen:"IMG/pepper3.png",
    nombre:"Pimiento rojo",
    precio:"1.50",
},

{
    imagen:"IMG/strawberry4.png",
    nombre:"Fresas",
    precio:"5.00",
},

{
    imagen:"IMG/apple5.png",
    nombre:"Manzanas",
    precio:"2.50",
},

{
    imagen:"IMG/orange6.png",
    nombre:"Naranjas",
    precio:"2.00",
},

{
    imagen:"IMG/banana7.png",
    nombre:"Plátanos",
    precio:"0.50",
},

{
    imagen:"IMG/lemon8.png",
    nombre:"Limones",
    precio:"0.30",
},
];

var lista=[];

pintar();
function pintar(){
    for(x=0; x<fruta.length; x++)
    document.getElementById('contenido').innerHTML+=`
    <div class="producto">
            <div><img src="${fruta[x].imagen}" onclick="anadircarrito(${x})"></div>
            <div class="nombre">${fruta[x].nombre}</div>
            <div class="precio">${fruta[x].precio} €</div>

            <div class="botones">
                <div class="menos" onclick="menos(${x})"> - </div>
                <div class="numero" id="numero${x}"> 0 </div>
                <div class="mas" onclick="mas(${x})"> + </div>
            </div>
    </div>`
};

function carrito(posicion){
    contadorC++;
    let valor;
    document.getElementById(`numcarro`).innerHTML=contadorC;
};

function mas(posicion){
    let valor=parseInt(document.getElementById(`numero${posicion}`).innerHTML);
    valor ++;
    document.getElementById(`numero${posicion}`).innerHTML=valor;
};

function menos(posicion){
    let valor=parseInt(document.getElementById(`numero${posicion}`).innerHTML);
    if(valor>0){
        valor--;
    }
    document.getElementById(`numero${posicion}`).innerHTML=valor;
};

function anadircarrito(posicion){
    contadorC++;
    document.getElementById("numcarro").innerHTML=contadorC;
    let valor=parseInt(document.getElementById(`numero${posicion}`).innerHTML);
    // alert("añadido " + fruta[posicion].nombre);
    lista.push({nombre:fruta[posicion].nombre,precio:fruta[posicion].precio});
}

function listaCarrito() {
    document.getElementById('contenedorCarrito').innerHTML="";
    for(let x=0;x<lista.length;x++){
        document.getElementById('contenedorCarrito').innerHTML+=`<div class="cajaCarrito">
                                                                <div>${lista[x].nombre} </div>
                                                                <div>${lista[x].precio} €</div>
                                                                 </div>` ;
    }
}