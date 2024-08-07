function receita() {
    var opcao1 = document.querySelector("#input1").value
    var opcao2 = document.querySelector("#input2").value

    var opcoes = [opcao1, opcao2]

    var escolhaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)]

    document.getElementById('resultado').innerHTML = `O polvo escolheu: <b> $(escolhaAleatoria) </b>`;
}

   // var string = 'string'
      // var number = 5
      // var float = 5.5

      // var array = ['a', 'b', 'c']

      // var obj = {
      //     carro: 'gol',
      //     ano: 2004,
      //     preco: 50000,
      //     cor: 'vermelho'
      // }
   //}

   //function soma(x, y) {
   //    var sum = x + y
   //    console.log('A resposta é: ' + sum)
   //}

   //soma(5, 8)
   //soma(1, 1)
   //soma(-1, 5000.2)