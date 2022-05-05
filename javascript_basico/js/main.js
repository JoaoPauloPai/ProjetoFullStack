

function consutarCep() {
    let cep = document.getElementById("cep").value
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            // document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;

        }
    })


}
function clicarBotao1() {
    document.getElementById('mensagem1').innerHTML = '<b>Clique aqui para abrir o Google em outra aba</b>';
    document.getElementById('mensagem2').innerHTML = "Clique aqui para abrir a página do UOL nesta aba"
}

function clicarBotao2() {

}

function redirecionar1() {
    window.open("https://www.google.com.br/");
}
function redirecionar2() {
    window.location.href = "https://www.uol.com.br/";
}

function redirecionar3() {
    document.getElementById('mensagem3').innerHTML = "Você paasou o mouse!";
}
function redirecionar4() {
    document.getElementById('mensagem3').innerHTML = "Passe o mousa aqui!"
}

function load() {
    alert("Página está sendo Carregada!");
}

function fufuncChange(element) {
    console.log(element.value);

}