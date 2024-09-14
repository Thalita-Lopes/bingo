
function createSpace(){
    let quant = 10;
    console.log(quant)
    if (quant <= 60) {
        
        for (let i = 1; i <= quant; i++){
            let containerBools = document.querySelector('.container-bools')
            let newBool = document.createElement('div')
            newBool.classList.add('bool')
            let number = document.createElement('p')
            number.classList.add('bool-number')
            let texto = document.createTextNode(`${i}`) 
            newBool.appendChild(number)
            number.appendChild(texto)
            containerBools.appendChild(newBool)
        }
        
    } else {
        console.log("Quantidade não permitida")
    }

}

function outraFuncao(){
    window.location.href = "sorteio.html"
}

function Enviar(){
    
    let quant = document.getElementById("quantidade")
    console.log(quant.value)
    alert(`Quantidade enviada!${quant.value}`)
    outraFuncao()
}

/*
const iniciar = document.querySelector(".button-start")

iniciar.addEventListener("click", () => {
    window.location.href = "sorteio.html"
})
*/