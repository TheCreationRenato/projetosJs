

function somar() {
    
    var num1 = parseFloat(document.getElementById("num1").innerHTML);
    var num2 = parseFloat(document.getElementById("num2").innerHTML);
    var resultado = parseFloat(document.getElementById("resultado").value);  
    
    soma = num1 + num2
    
    

    if (soma == resultado  ) {
        alert ("Parabens, você acertou!!!")
    } else{
        alert("Você errou, tente novamente!")
    }

    resetar();
}



function resetar() {

    document.getElementById("resultado").value = "";

    var r = Math.floor(Math.random() * 100);
    document.getElementById("num1").innerHTML = r;

    var m = Math.floor(Math.random() * 100);
    document.getElementById("num2").innerHTML = m;
}
