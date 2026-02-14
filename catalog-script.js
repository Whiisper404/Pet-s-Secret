document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogCards = document.querySelectorAll('.catalog-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            catalogCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.catalog-card');
            const productName = card.querySelector('h3').textContent;
            const productDescription = card.querySelector('p').textContent;
            
            showProductDetails(productName, productDescription);
        });
    });
});

function showProductDetails(name, description) {
    alert(`Товар: ${name}\n\nОписание: ${description}\n\nЗдесь будет детальная информация о товаре.`);
}

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    loadCartFromStorage();
});

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        displayCart();
    }
}