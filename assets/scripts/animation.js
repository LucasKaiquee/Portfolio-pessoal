const saida = document.getElementById('animation');

function digitacao (texto, contador) {
    if (contador < texto.length) {
        setTimeout(()=>{
            saida.textContent += texto.charAt(contador);
            contador ++;
            digitacao(texto, contador);
        },80)
    }
}

digitacao('Sou desenvolvedor Front - End', 0);