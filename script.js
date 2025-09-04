


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

const cartItems = ` <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-info">
                       <div class="cart-item-title">${item.title}</div>
                       <div class="cart-item-price">${item.price * item.quantity.toFixed(2)}</div>
                       <div class="cart quantity-controls">
                        <button class = " quantity-btn" onclick="updateQuantity(${item.id},-1)"><i class="fas fa-minus"></i></button>
                        <span class="quantity">${item.quantity}</span>
                        <button class = " quantity-btn" onclick="updateQuantity(${item.id},1)"><i class="fas fa-plus"></i></button>
                            
                       </div>
                    </div>
                </div> `


                