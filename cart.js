document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cart-count");
    const cartLink = document.getElementById("cart-link");
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const closeModal = document.querySelector(".close");
    const checkoutButton = document.getElementById("checkout");

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function updateCartModal() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            total += parseFloat(item.price);
        });
        cartTotal.textContent = total.toFixed(2);
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const itemName = button.getAttribute("data-item");
            const itemPrice = button.getAttribute("data-price");

            cart.push({ name: itemName, price: itemPrice });
            saveCart();
            updateCartCount();
            alert(`${itemName} added to cart!`);
        });
    });

    cartLink.addEventListener("click", (e) => {
        e.preventDefault();
        updateCartModal();
        cartModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == cartModal) {
            cartModal.style.display = "none";
        }
    });

    checkoutButton.addEventListener("click", () => {
        alert("Checkout not implemented yet!");
    });

    updateCartCount();
});
