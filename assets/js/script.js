// Tratamento de eventos

document.querySelector("#modelo-tenis").addEventListener("change", calcular);
document.querySelector("#tamanho").addEventListener("input", exibirTamanho);

document.querySelectorAll("input[name='cor']").forEach(cor => {
    cor.addEventListener("change", calcular);
});

function exibirTamanho() 
{
    const tamanhoSelecionado = document.querySelector("#tamanho").value;
    document.querySelector("#tamanhoSelecionado").innerText = tamanhoSelecionado;
}

function calcular() 
{
    // DOM - Document Object Model
    const modeloTenis = document.querySelector("#modelo-tenis").value;
    const valoresModelo = {"1": 788.49, "2": 1139.99, "3": 949.99};
    const valorTenisBase = valoresModelo[modeloTenis] || 0;

    const valoresAdicionaisPorCor = 
    {
        "azul": 20,
        "branco": 15,
        "vermelho": 25
    };

    let valorTenisFinal = valorTenisBase;

    const cores = document.querySelectorAll("input[name='cor']");
    cores.forEach(cor => 
    {
        if (cor.checked) 
        {
            const corSelecionada = cor.value;
            const valorAdicional = valoresAdicionaisPorCor[corSelecionada] || 0;
            valorTenisFinal += valorAdicional;
        }
    });

    console.log(valorTenisFinal);
    document.querySelector("#valorTenis").innerText = "Valor total R$: " + valorTenisFinal.toFixed(2);
}

exibirTamanho();
