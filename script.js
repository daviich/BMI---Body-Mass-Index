const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(
        nome !=='' && altura !=='' && peso !==''
    )
    {
        const valorIMC = (peso/ (altura*altura)).toFixed(1);
        let classificacao = "";
        if (valorIMC<18.5){
            classificacao = 'Underweight';
        }
        else if (valorIMC<25){
            classificacao = 'Normal weight';
        }
        else if (valorIMC<30){
            classificacao = 'Overweight';
        }
        else if (valorIMC<35){
            classificacao = 'Obesity';
        }
        resultado.textContent = `${nome}, your BMI is ${valorIMC} and you are ${classificacao}`;
    }
    
    else{
        resultado.textContent = 'Preencha todo o campo'
    }
}

calcular.addEventListener('click', imc);
