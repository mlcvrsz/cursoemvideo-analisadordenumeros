let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = [] // O vetor (array) será utilizado para analisar os dados

// Para ocorrer a adição do elemento (com base na função adicionar()) é preciso antes fazer criar as funções isNumero e inLista
// Verificar se é n um número
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Se o número está na lista (poderia fazer uso do For)
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Se o valor não for encontrado na lista é usado o -1 (Array)
        return true
    } else {
        return false
    }
}
// Se eu tiver um número e esse número não estiver na lista = O número é adicionado. Caso contrário é exibido "Valor inválido ou já encontrado na lista"
// O array "valores" irá servir para armazenar os números que forem adicionados dentro da lista
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Adicionar o número ao vetor (porém sem mostrá-lo visualmente), sendo valores o índice e o push o comando que adiciona o elemento ao vetor. 
        let item = document.createElement("option") // Cria um item (no caso, esse item será o que vai ser adicionado a lista) 
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    // Para fazer com que o cursor apague o número já colocado e deixe vazio, aumentando a interatividade
    num.value = '' // Esvazia o campo
    num.focus() // Deixa o cursor do mouse piscando ao passar pela caixa
}

function finalizar() {
    // Verificar se o vetor está vazio
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        let total = valores.length // Para saber a quantidade de elementos que o vetor tem
        // Descobrir o maior e o menor número
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        // Valores na posição [pos]
        // O exemplo de laço abaixo é um laço de percurso (para varrer o vetor inteiro)
        for (let pos in valores) {
            soma += valores[pos] // Irá somar todos os valores existentes
            if (valores[pos] > maior) {
                maior = valores[pos] // Deixa de ser o valor inicial e passa a ser esse
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = "" // Zerar o "res", para sempre que o botão finalizar for acionado o que tiver dentro dele seja atualizado
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }
}

