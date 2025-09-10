function verificabtn() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value, 10);
    const resultado = document.getElementById('resultado-verifica');

    if (idade >= 18) {
        resultado.textContent = `Olá ${nome}, você pode entrar.`;
    } else {
        resultado.textContent = `Olá ${nome}, você não pode entrar.`;
    }
}

function passadeano() {
    const val1 = parseFloat(document.getElementById('valor1').value);
    const val2 = parseFloat(document.getElementById('valor2').value);
    const val3 = parseFloat(document.getElementById('valor3').value);
    const resultado = document.getElementById('resultado-media');

    const media = (val1 + val2 + val3) / 3;

    if (media >= 5) {
        resultado.textContent = 'Aprovado.';
    } else if (media >= 4) {
        resultado.textContent = 'Recuperação.';
    } else {
        resultado.textContent = 'Reprovado.';
    }
}
