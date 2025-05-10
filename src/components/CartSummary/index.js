import Popup from 'reactjs-popup'
import Payment from '../Payment'
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
            <Popup
              modal
              trigger={
                <button className="chechout-button" type="button">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
