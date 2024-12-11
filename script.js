let alvo = document.getElementById('alvo');
let resultado = document.getElementById('resultado');
let temp_inicial, temp_final;

let jogo = "inicial";
let clicar = false; 

alvo.addEventListener('click', () => {
    if (jogo === "inicial" && !clicar) {
        let contador = 3;
        clicar = true;  

        const intervalo = setInterval(() => {
            if (contador > 0) {
                resultado.textContent = contador;
                contador--;
            } else {
                clearInterval(intervalo);
                resultado.textContent = ""; 
                alvo.src = "alvo_verde.png";  
                temp_inicial = Date.now();
                jogo = "pronto";  
            }
        }, 1000);

    } else if (jogo === "pronto") {
        temp_final = Date.now();
        let temp_reacao = temp_final - temp_inicial;
        resultado.textContent = `Seu tempo de reação foi de ${temp_reacao} ms!`;

        if (temp_reacao < 150) {
            alert(`Parabéns, seu tempo foi acima da média! Tempo: ${temp_reacao} ms`);
        } else if (temp_reacao >= 150 && temp_reacao <= 250) {
            alert(`Seu tempo foi: ${temp_reacao} ms!`);
        } else if (temp_reacao > 300) {
            alert(`Seu tempo foi: ${temp_reacao} ms. Tente melhorar!`);
        }

        alvo.src = "alvo_vermelho.png"; 
        jogo = "inicial";  
        clicar = false;  
    }
});
