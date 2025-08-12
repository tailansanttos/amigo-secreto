//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    const nomeAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    if(nomeAmigo.value.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    amigos.push(nomeAmigo.value.trim());
    
    if(listaAmigos.innerHTML === ""){
        listaAmigos.innerHTML = nomeAmigo.value.trim();
    }else listaAmigos.innerHTML = listaAmigos.innerHTML + ", " + nomeAmigo.value.trim();

    nomeAmigo.value = "";
}


function sortearAmigo(){
    if(amigos.length <4 ){
        alert("É necessário ter pelo menos 4 amigos para realizar o sorteio.");
        return;
    }
    embaralhar(amigos);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for(let i=0; i < amigos.length; i++){
        const proximoAmigo = (i + 1) % amigos.length;
        if(amigos[i] == amigos[proximoAmigo]){
            sortearAmigo();
            return;
    }

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `${amigos[i]} - ${amigos[proximoAmigo]}`;
    resultado.appendChild(itemResultado);
    }
}


function embaralhar(lista){
    for(let i = lista.length - 1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]] ;
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}