//Tratamento de eventos
//document.querySelector("#modelo-tenis").addEventListener("change", calcular)
//document.querySelector("tamanho"),addEventListener("input", function () 
//    {
//        const tamanho = document.querySelector("tamanho").value
//        document.querySelector("label[for=tamanho]").innerText = "Tamanho " + tamanho;
//        calcular();
//    })
//document.querySelector("mod-sim").addEventListener("change", calcular)
//document.querySelector("mod-nao").addEventListener("change", calcular)

function calcular()
{
    // DOM - Document Object Model
    let modeloTenis = document.querySelector("#modelo-tenis").value;
    valorTenis = 0;
    console.log(modeloTenis);

    //const modificar = document.querySelector("mod-tenis").checked adicionar mod tenis para calcular e modificar o valor

    switch (valorTenis) 
    {
        case modeloTenis: 1
            valorTenis = 788.49
            break;
        case modeloTenis: 2
            valorTenis = 1139.99
            break;
        case modeloTenis: 3
            valorTenis = 949.99
            break;
        default:
            break;
    }

    
    console.log(valorTenis);
    document.querySelector("#valorTenis").innerText = "R$: " + valorTenis.toFixed(2);
}



