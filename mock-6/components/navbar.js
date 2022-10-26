function navbar() {
  return `
    <nav id="navbar">
    <div class="logo">
        <h2>Masaicars</h2>
    </div>
    <div class="pages">
        <div>
            <button onclick="window.location.href='AdPage.html'">REGISTER YOUR CARS HERE</button>
        </div>
        <div><button onclick="window.location.href='CarsPage.html'">CAR MODELS</button></div>
        <div><button onclick="window.location.href='WishlistPage.html'">WISHLIST</button></div>
    </div>
</nav>
    `;
}
export default navbar;
