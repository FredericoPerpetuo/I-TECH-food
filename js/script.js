const listaInputs = document.querySelectorAll("input");
const listaPrecos = document.querySelectorAll(".preco");
const btnPedido = document.querySelector(".btn");
let total = 0;

function fechaPedido() {
  for (let i = 0; i < 6; i++) {
    if (listaInputs[i].value > 0) {
      total +=
        parseFloat(listaInputs[i].value) * parseFloat(listaPrecos[i].innerText);
    }
  }
  if (total === 0) {
    alert("Escolha pelo menos 1 produto!");
  } else {
    alert(
      `O total do seu pedido é R$ ${parseFloat(total).toFixed(
        2
      )}\nO IEMP-Tech food agradece a preferência!`
    );
  }
  limparInputs();
  total = 0;
}

function limparInputs() {
  for (let i = 0; i < 6; i++) {
    listaInputs[i].value = "";
  }
}

btnPedido.addEventListener("click", fechaPedido);
