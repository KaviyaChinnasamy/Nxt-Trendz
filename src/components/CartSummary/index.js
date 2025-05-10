import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="cartsummary-container">
            <h1 className="heading">
              <span className="value">Order Total:</span> Rs {total} /-
            </h1>
            <p className="para">{cartList.length} Items in cart</p>
            <button type="button" className="button d-sm-none">
              Checkout
            </button>
            <button type="button" className="button d-lg-none">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
