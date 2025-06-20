export default function Home() {
  return (
    <div className="container home">
      <h1>Welcome to the Minimalist Store</h1>
      <p>Browse products with a shopping cart.</p>

      <div className="hero-section">
        <img
          src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1374&auto=format&fit=crop"
          alt="Minimal Shopping"
          className="hero-image"
        />
        <h2>Online Shopping</h2>
        <p>Shop any products and them in add cart</p>
      </div>
    </div>
  );
}