const nome= document.getElementById("nome");
nome.addEventListener("mouseover", function(){
    nome.innerHTML="MÁXIMUS";
});
nome.addEventListener("mouseout", function(){
    nome.innerHTML="...";
});