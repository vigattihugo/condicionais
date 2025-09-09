document.getElementById("verificabtn").addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 =   (document.getElementById("nota3").value);

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerText = "Por favor, insira todas as notas corretamente.";
        return;
    }

   
    const media = (nota1 + nota2 + nota3) / 3;

   
    let mensagem = `${nome}, sua média é ${media.toFixed(2)}. `;
    mensagem += media >= 6 ? "Aprovado!" : "Reprovado.";

   
    document.getElementById("resultado").innerText = mensagem;
});
