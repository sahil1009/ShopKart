
import { Link } from "react-router-dom";
import "./Cart.css";
import { Navbar } from "../components/Navbar";
function Cart() {
  return (
    <>
    <Navbar />

      <div className="cart-page">
        <div className="cart-container">

          {/* Cart Table */}
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {/* Product 1 */}

                <tr className="cart-item-row">
                  <td>
                    <div className="cart-product">
                      <div className="cart-product-image">
                        <img src="/images/products/headphones.png" alt="boAt Rockerz 450" />
                      </div>

                      <div className="cart-product-info">
                        <h3>boAt Rockerz 450</h3>
                        <p className="cart-category">Electronics</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="cart-price">
                      <strong>₹1,599</strong>
                      <span className="original-price">₹1,999</span>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-control">
                      <button type="button">−</button>
                      <span>1</span>
                      <button type="button">+</button>
                    </div>
                  </td>

                  <td> <strong className="item-total">₹1,599</strong> </td>

                  <td>
                    <button type="button" className="delete-btn">
                      <img src="/icons/delete-icon.png" alt="Delete" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Clear Cart */}
            <div className="cart-footer">
              <button type="button" className="clear-cart-btn">
                <img src="/icons/clear-cart.png" alt="" /> Clear Cart
              </button>
            </div>
          </div>
          {/* Order Summary */}
          <aside className="cart-sidebar">
            <div className="order-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal (2 items)</span>
                <span>₹5,797</span>
              </div>

              <div className="summary-row discount-row">
                <span>Discount</span>
                <span>−₹1,300</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">FREE</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total Amount</span>
                <strong>₹4,497</strong>
              </div>

              <p className="saved-message">You saved ₹1,300 on this order</p>

              <button type="button" className="checkout-btn">
                Proceed to Checkout
                <span>→</span>
              </button>

              <button type="button" className="coupon-btn">
                <img src="/icons/coupon.png" alt="" />
                Apply Coupon
              </button>
            </div>

            {/* Secure Payment */}

            <div className="secure-box">
              <img src="/icons/security-icon.png" alt="" className="secure-icon" />
              <div>
                <h3>Safe & Secure Payments</h3>
                <p>100% secure payments. Easy returns. Your data is protected.</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Continue Shopping */}

        <div className="cart-navigation">
          <Link to="/products" className="continue-shopping">← Continue Shopping</Link>
        </div>
      </div>
    </>
  )
}
export default Cart