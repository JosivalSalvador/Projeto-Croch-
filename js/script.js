document.addEventListener('DOMContentLoaded', function () {
    // Adicione a lógica JavaScript aqui
    console.log("JavaScript carregado!");

    // Função para adicionar produtos ao carrinho
    function addToCart(productId) {
        console.log(`Produto ${productId} adicionado ao carrinho`);
        // Lógica para adicionar o produto ao carrinho (ex: armazenar no localStorage)
    }

    // Tornando a função globalmente acessível
    window.addToCart = addToCart;
});
