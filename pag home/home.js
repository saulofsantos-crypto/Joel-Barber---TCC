function login(){
    alert("Abrindo tela de login...");
}

function criarConta(){
    alert("Abrindo tela de cadastro...");
}

function agendarAgora(){
    alert("Redirecionando para agendamento...");
}

function verServicos(){

    const servicos = document.getElementById("servicos");

    servicos.scrollIntoView({
        behavior: "smooth"
    });
}

function verHorarios(){

    const data = document.querySelector('input[type="date"]').value;
    const horario = document.querySelector('input[type="time"]').value;

    if(data === "" || horario === ""){
        alert("Selecione uma data e um horário.");
    }

    else{
        alert(
            "Horários disponíveis para " +
            data +
            " às " +
            horario
        );
    }
}

function abrirServicos(){
    alert("Abrindo página de serviços...");
}

function conhecerBarbeiros(){
    alert("Mostrando barbeiros disponíveis...");
}

function verProdutos(){

    const produtos = document.getElementById("produtos");

    produtos.scrollIntoView({
        behavior: "smooth"
    });
}

function irFilaEspera(){

    const fila = document.getElementById("fila");

    fila.scrollIntoView({
        behavior: "smooth"
    });
}

/* EFEITO HEADER AO ROLAR */

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#050505";
        header.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
    }

    else{

        header.style.background = "#000";
        header.style.boxShadow = "none";
    }
});

/* BOTÕES DOS CARDS */

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.border = "1px solid #d4a24c";
    });

    card.addEventListener("mouseleave", function(){

        card.style.border = "1px solid #242424";
    });

});