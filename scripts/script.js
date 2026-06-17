const nome= document.getElementById("nome");
nome.addEventListener("mouseover", function(){
    nome.innerHTML="MÁXIMUS";
});
nome.addEventListener("mouseout", function(){
    nome.innerHTML="...";
});
document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nomeInput").value;
    const mensagem = document.getElementById("mensagem").value;
    const origem = document.getElementById("origem").value;

    if(nome === "" || mensagem === "" || origem === ""){
        alert("Preencha todos os campos!");
        return;
    }

    document.getElementById("msgFinal").innerText =
        "✅ Formulário enviado com sucesso!";
});
