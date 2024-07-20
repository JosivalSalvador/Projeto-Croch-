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


function addItem() {
    const cart = document.getElementById('itens_carrinho');

    const product = document.createElement('div');
    product.className = 'product';

    const img = document.createElement('img');

    img.src = document.querySelector('.item').querySelector('img').src;
    img.alt = document.querySelector('#nome').textContent;

    const details = document.createElement('div');
    details.className = 'details';

    const name = document.createElement('p');
    name.textContent = document.querySelector('#nome').textContent;

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

    quantity.appendChild(minusButton);
    quantity.appendChild(input);
    quantity.appendChild(plusButton);

    const unitPrice = document.createElement('p');
    const prec = document.querySelector('#valor').textContent;
    unitPrice.textContent = `Preço Unitário: ${prec}`;

    const totalPrice = document.createElement('p');
    totalPrice.textContent = `Total: ${prec}`;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => product.remove());

    details.appendChild(name);
    details.appendChild(quantity);
    details.appendChild(unitPrice);
    details.appendChild(totalPrice);
    details.appendChild(removeButton);

    product.appendChild(img);
    product.appendChild(details);

    cart.appendChild(product);
}

function updateQuantity(input, change) {
    let quantity = parseInt(input.value) + change;
    if (quantity < 1) quantity = 1;
    input.value = quantity;
    
    const unitPrice = parseInt(document.querySelector('#valor').textContent); // Atualize de acordo com o preço do produto
    const totalPrice = unitPrice * quantity;
    input.parentElement.nextElementSibling.nextElementSibling.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

