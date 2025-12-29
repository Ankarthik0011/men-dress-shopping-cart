let total = 0;
function addToCart(item, price) {
    const cart = document.getElementById("cart-items");
    const li = document.createElement("li");
    li.textContent = `${item} - ₹${price}`;
    cart.appendChild(li);
    total += price;
    document.getElementById("total").textContent = total;
}
