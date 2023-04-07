function soma(a, b) {

    return a + b
    }
    function subtracao(a, b) {

      return a - b
    }
    function divisao(a, b){

      return a / b
    }
    function multiplicacao(a, b) {

      return a * b
    }

var n1 = Number(prompt("Digite o primeiro número: "))
var n2 = Number(prompt("Digite o segundo número: "))
var op = prompt("Digite a operação desejada de 1 a 4:\n 1.Adição\n 2.Subtração\n 3.Divisão\n 4.Multiplicação")
var resultado
if (op == "1") {
  resultado = soma(n1, n2)
} else if (op == "2") {
  resultado = subtracao(n1, n2)
} else if (op == "3") {
  resultado = divisao(n1, n2)
} else if (op == "4") {
  resultado = multiplicacao(n1, n2)
} else {
  alert ("Operação inválida")
}
  alert(resultado)
