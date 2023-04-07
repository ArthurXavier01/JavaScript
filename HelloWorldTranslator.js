var idioma = prompt("Digite o idioma desejado para traduzir o 'Olá mundo'(EN, ESP, FRA): ").toLowerCase()
if (idioma == "en") {
  var variacao = prompt("Digite uma varição EN: (US, UK, GB): ").toLowerCase()
  } if (variacao == "us") {
    alert("Hi World")
  } else if (variacao == "gb") {
    alert("Hello World")
  } else if (variacao == "uk") {
    alert("Hello World")
} if (idioma == "esp") {
    var variacao = prompt("Digite a variação ESP: (CAS, EUR)").toLowerCase()
  } if (variacao == "cas") {
    alert ("Ey Mundo")
  } else if (variacao == "eur") {
    alert ("Hola Mundo")
} if (idioma == "fra") {
    var variacao = prompt("Digite a variação FRA: (SWITZERLAND, PARIS)").toLowerCase()
  } if (variacao == "switzerland") {
    alert("Hé Mounde")
  } else if (variacao == "paris") {
    alert("Salut Mounde")
  }
