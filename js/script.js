function muda_valor() {
  let numeroAleatorio = Math.floor(Math.random() * 10);
  let elemento = document.getElementById("quant");
  elemento.innerHTML = numeroAleatorio.toString();
}

function hiden_carrinho(){
  const div = document.getElementById('Carrinho');
  if (div.style.display === 'none' || div.style.display === '') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}


function addItem(button) {
    const cart = document.getElementById('itens_carrinho');
    const parentDiv = button.parentElement;


    const product = document.createElement('div');
    product.className = 'product';

    const img = document.createElement('img');

    img.src = parentDiv.querySelector('.item img').src;
    img.alt = parentDiv.querySelector('.item .det #nome').textContent;

    const details = document.createElement('div');
    details.className = 'details';

    const name = document.createElement('p');
    name.textContent = parentDiv.querySelector('.item .det #nome').textContent;
    name.style.fontSize = '20px';
    name.style.marginBottom = '20px';

    const quantity = document.createElement('div');
    quantity.className = 'quantity';

    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.addEventListener('click', () => updateQuantity(input, -1));

    const input = document.createElement('input');
    input.type = 'text';
    input.value = '1';
   

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.addEventListener('click', () => updateQuantity(input, 1));

    const name_quant = document.createElement('p');
    name_quant.textContent = 'Quantidade:';
    name_quant.style.marginLeft = '5px';

    quantity.appendChild(name_quant);
    quantity.appendChild(minusButton);
    quantity.appendChild(input);
    quantity.appendChild(plusButton);

    const unitPrice = document.createElement('p');
    const prec = parentDiv.querySelector('.item .det #valor').textContent;
    unitPrice.textContent = `Preço Unitário: ${prec}`;
    unitPrice.style.textAlign = 'left';
    unitPrice.style.marginLeft = '5px';

    const totalPrice = document.createElement('p');
    totalPrice.textContent = `Total: ${prec}`;
    totalPrice.style.textAlign = 'left';
    totalPrice.style.marginLeft = '5px';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', () => product.remove());

    details.appendChild(name);
    details.appendChild(quantity);
    details.appendChild(unitPrice);
    details.appendChild(totalPrice);

    product.appendChild(img);
    product.appendChild(details);
    product.appendChild(removeButton);

    cart.appendChild(product);
}

function updateQuantity(input, change) {
  let quantity = parseInt(input.value) + change;
  if (quantity < 1) quantity = 1;
  input.value = quantity;
  
  const parentDiv = input.parentElement.parentElement;
  const unitPrice = parseFloat(parentDiv.querySelector('.details p:nth-child(3)').textContent.replace('Preço Unitário: ', ''));
  const totalPrice = unitPrice * quantity;
  parentDiv.querySelector('.details p:nth-child(4)').textContent = `Total: ${totalPrice.toFixed(2)}`;
}

