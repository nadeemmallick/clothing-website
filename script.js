


const featureCard = `
    <div class="product-card" data-category="${product.category}">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <div class="product-price">${product.price}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    </div>
`