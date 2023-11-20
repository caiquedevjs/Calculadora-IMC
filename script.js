const pesoIdealElement = document.getElementById('peso-ideal');
const pesoNaoIdealElement = document.getElementById('peso-nao-ideal');
const displayResultado = document.getElementById('resultado-display');

const imcBtn = document.getElementById('btn-imc');
imcBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    const alturaIMC = document.getElementById('altura').value;
    const pesoIMC = document.getElementById('peso').value;
    const alturaIMCFLOAT = parseFloat(alturaIMC);
    const pesoIMCFLOAT = parseFloat(pesoIMC);
    if (alturaIMCFLOAT && pesoIMCFLOAT) { 
        const formulaIMC = pesoIMCFLOAT / (alturaIMCFLOAT * alturaIMCFLOAT);
        const resultadoIMC = document.getElementById('resultao-texto');
        if (formulaIMC <= 18.5) {
            resultadoIMC.innerHTML = `Seu índice de massa corporal é de ${formulaIMC.toFixed(2)}, você está abaixo do peso `;
            pesoNaoIdealElement.style.display = "block";
            pesoIdealElement.style.display = "none";
            displayResultado.style.backgroundColor = "#ffff";
        } else if (formulaIMC > 18.5 && formulaIMC <= 24.9) {
            resultadoIMC.innerHTML = `Seu índice de massa corporal é de ${formulaIMC.toFixed(2)}, você está no peso ideal `;
            pesoIdealElement.style.display = "block";
            pesoNaoIdealElement.style.display = "none";
            displayResultado.style.backgroundColor = "#ffffff";
        } else if (formulaIMC > 25 && formulaIMC <= 29.9) {
            resultadoIMC.innerHTML = `Seu índice de massa corporal é de ${formulaIMC.toFixed(2)}, você está com sobrepeso `;
            pesoNaoIdealElement.style.display = "block";
            pesoIdealElement.style.display = "none";
            displayResultado.style.backgroundColor = "#ffffff";
        } else if (formulaIMC > 29.9 && formulaIMC <= 34.9) {
            resultadoIMC.innerHTML = `Seu índice de massa corporal é de ${formulaIMC.toFixed(2)}, você está com obesidade classe I `;
            pesoNaoIdealElement.style.display = "block";
            pesoIdealElement.style.display = "none";
            displayResultado.style.backgroundColor = "#ffffff";
        }
    } else {
        
        console.log("Invalid input. Please enter valid values for height and weight.");
    }
});