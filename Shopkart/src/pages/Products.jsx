import { Navbar } from "../components/Navbar";
import './Products.css'

  const products =[
    {
      id:1,
      name: "Samsung Galaxy M14 5G",
      category: "Electronics",
      price: "12,499",
      originalPrice: "14,999",
      rating: 4.4,
      reviews: 1850,
      discount: "17%",
      ssAvailable: true,
      image:"/images/products/Samsung_phone.png"
    },
    {
      id:2,
      name: "Airdope",
      category: "Electronics",
      price: "12,499",
      originalPrice: "14,999",
      rating: 4.4,
      reviews: 1850,
      discount: "17%",
      ssAvailable: true,
      image:"/images/products/airdopes.png"
    },
    {
      id:3,
      name: "Amazon Echo Dot",
      category: "Electronics",
      price: "12,499",
      originalPrice: "14,999",
      rating: 4.4,
      reviews: 1850,
      discount: "17%",
      ssAvailable: true,
      image:"/images/products/amazon_echo_dot.png"
    },
    {
      id:4,
      name: "Ferrari T-Shirt",
      category: "Electronics",
      price: "12,499",
      originalPrice: "14,999",
      rating: 4.4,
      reviews: 1850,
      discount: "17%",
      ssAvailable: true,
      image:"/images/products/ferrari.png"
    },
    {
      id:5,
      name: "Iphone 18 Pro",
      category: "Electronics",
      price: "12,499",
      originalPrice: "14,999",
      rating: 4.4,
      reviews: 1850,
      discount: "17%",
      ssAvailable: true,
      image:"/images/products/iphone.png"
    },
    {
      id:6,
      name: "Blue Jeans",
      category: "Electronics",
      price: "12,499",
      originalPrice: "14,999",
      rating: 4.4,
      reviews: 1850,
      discount: "17%",
      ssAvailable: true,
      image:"/images/products/jeans.png"
    },
  ];

export function Products(){
    return(
      <>
        <Navbar/>
        <main className="products-page">

          <section className="products-banner">
            <div className="banner-content">
              <h1>All <span>Products</span></h1>
              <p>Explore our wide range of top quality products</p>
            </div>
          </section>

            {/* filter option start here */}
          <section className="products-content">
            <aside className="filter-sidebar">

              {/* first div */}
              <div className="filter-title">
                <h3>FILTERS</h3>
                <button>Clear All</button>
              </div>

              {/* second div */}
              <div className="filter-group">
                <h4>Categories</h4>
                <label htmlFor=""><input type="checkbox"/>Electronics</label>
                <label htmlFor=""><input type="checkbox"/>Fashion</label>
                <label htmlFor=""><input type="checkbox"/>Home & Kitchen</label>
                <label htmlFor=""><input type="checkbox"/>Beauty</label>
                <label htmlFor=""><input type="checkbox"/>Sports</label>
                <label htmlFor=""><input type="checkbox"/>Books</label>
              </div>


              {/* third div price filter */}

              <div className="filter-group">
                <h4>Price Range</h4>
                <input type="range" min="199" max="20000" />
                <div className="price-range">
                  <span>$199</span>
                  <span>$20,000</span>
                </div>

              </div>

              {/* fourth div rating filter */}
              <div className="filter-group">
                <h4>Ratings</h4>
                <label> <input type="checkbox" /> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ & above </label>
                <label> <input type="checkbox" /> ⭐️ ⭐️ ⭐️ ⭐️ ✩ & above </label>
                <label> <input type="checkbox" /> ⭐️ ⭐️ ⭐️ ✩ ✩ & above </label>
              </div>

                {/* fifth div availability */}
                <div className="filter-group">
                  <h4>Availability</h4>
                  <label> <input type="checkbox" /> In Stock </label>
                  <label> <input type="checkbox" /> Out of Stock </label>
                </div>
            </aside>

              <div className="products-area">
                <div className="products-header">
                  <p>Showing all products</p>
                </div>
              
             <div className="products-grid">
              {products.map((product) => (

                  <div className="product-card" key={product.id}>

                    <div className="product-image">

                      {product.discount && (
                        <span className="discount-badge">-{product.discount}</span>
                      )}

                      <button className="wishlist-button"> ♡ </button>
                      <img src={product.image} alt={product.name} />
                    </div>

                    <div className="product-info">
                      <small>{product.category}</small>
                      <h3>{product.name}</h3>
                      <div className="rating"> ⭐ {product.rating} 
                        <span> ({product.reviews})</span>
                      </div>

                      <div className="product-price">  ₹{product.price}
                        <del> ₹{product.originalPrice} </del>
                      </div>
                      <button className="add-cart-button"> 🛒 Add to Cart </button>
                             </div>
                  </div>
                ))}
              </div>
            </div>

        </section>
      </main>
    </>
  );
}
export default Products;