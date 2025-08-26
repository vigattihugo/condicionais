function verificabtn(nome, idade){
    if(idade >= 18){
       return 'Olá ' + nome + ', você pode entrar';

    } else {
        return 'Olá ' + nome + ', você não pode entrar';
    }


}

function passadeano(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var val3 = document.getElementById('valor3').value;

    result = (val1+val2+val3)/3;

    if(result >= 5){
        return 'Tá aprovado com a média';
    } else if(result >= 4){
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }

}