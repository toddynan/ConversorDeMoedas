function converterMoedas() {
    let usuario = document.getElementById("nomeUsuario").value
    let verificaMoeda = Number(document.getElementById("moedaEscolhida").value)

    var cotacoes = {
        dolar: 5.27,
        euro: 5.66,
        libraEsterlina: 6.38,
        yuanChines: 0.78,
        ieneJapones: 0.04,
        bitCoin: 116281.05
    }

    switch (verificaMoeda) {
        case 1:
            var valorParaConverter = Number(document.getElementById("valorParaConverter").value)
            var valorEmReal = valorParaConverter*cotacoes.dolar
            valorEmReal = valorEmReal.toFixed(2)
            elementoValorConvertido = document.getElementById("valorConvertido")
            elementoValorConvertido.innerHTML = usuario+", o valor, em Real, é: R$ "+valorEmReal
            document.getElementById("nomeUsuario").value = ""
            document.getElementById("moedaEscolhida").value= ""
            document.getElementById("valorParaConverter").value = ""
        break

        case 2:
            var valorParaConverter = Number(document.getElementById("valorParaConverter").value)
            var valorEmReal = valorParaConverter*cotacoes.euro
            valorEmReal = valorEmReal.toFixed(2)
            elementoValorConvertido = document.getElementById("valorConvertido")
            elementoValorConvertido.innerHTML = usuario+", o valor, em Real, é: R$ "+valorEmReal
            document.getElementById("nomeUsuario").value = ""
            document.getElementById("moedaEscolhida").value= ""
            document.getElementById("valorParaConverter").value = ""
        break

        case 3:
            var valorParaConverter = Number(document.getElementById("valorParaConverter").value)
            var valorEmReal = valorParaConverter*cotacoes.libraEsterlina
            valorEmReal = valorEmReal.toFixed(2)
            elementoValorConvertido = document.getElementById("valorConvertido")
            elementoValorConvertido.innerHTML = usuario+", o valor, em Real, é: R$ "+valorEmReal
            document.getElementById("nomeUsuario").value = ""
            document.getElementById("moedaEscolhida").value= ""
            document.getElementById("valorParaConverter").value = ""
        break

        case 4:
            var valorParaConverter = Number(document.getElementById("valorParaConverter").value)
            var valorEmReal = valorParaConverter*cotacoes.yuanChines
            valorEmReal = valorEmReal.toFixed(2)
            elementoValorConvertido = document.getElementById("valorConvertido")
            elementoValorConvertido.innerHTML = usuario+", o valor, em Real, é: R$ "+valorEmReal
            document.getElementById("nomeUsuario").value = ""
            document.getElementById("moedaEscolhida").value= ""
            document.getElementById("valorParaConverter").value = ""
        break

        case 5:
            var valorParaConverter = Number(document.getElementById("valorParaConverter").value)
            var valorEmReal = valorParaConverter*cotacoes.ieneJapones
            valorEmReal = valorEmReal.toFixed(2)
            elementoValorConvertido = document.getElementById("valorConvertido")
            elementoValorConvertido.innerHTML = usuario+", o valor, em Real, é: R$ "+valorEmReal
            document.getElementById("nomeUsuario").value = ""
            document.getElementById("moedaEscolhida").value= ""
            document.getElementById("valorParaConverter").value = ""
        break

        case 6:
            var valorParaConverter = Number(document.getElementById("valorParaConverter").value)
            var valorEmReal = valorParaConverter*cotacoes.bitCoin
            valorEmReal = valorEmReal.toFixed(2)
            elementoValorConvertido = document.getElementById("valorConvertido")
            elementoValorConvertido.innerHTML = usuario+", o valor, em Real, é: R$ "+valorEmReal
            document.getElementById("nomeUsuario").value = ""
            document.getElementById("moedaEscolhida").value= ""
            document.getElementById("valorParaConverter").value = ""
        break

        default:
            alert(usuario+", escolha uma moeda válida para realizar o seu cálculo!")
    }
}


