function muda_valor() {
  let numeroAleatorio = Math.floor(Math.random() * 10);
  let elemento = document.getElementById("quant");
  elemento.innerHTML = numeroAleatorio.toString();
}