

function consutarCep(){
    let cep = document.getElementById("cep").value
    let url = "https://viacep.com.br/ws/"+ cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
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