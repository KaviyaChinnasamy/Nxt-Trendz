import {useContext, useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const paymentOptionsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isDisabled: false,
  },
]

const Payment = () => {
  const {cartList} = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  const updatePaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }
  const onPlaceOrder = () => setIsOrderPlaced(true)
  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)
  const renderPlaymentMethodInput = () => (
    <ul className="list-container">
      {paymentOptionsList.map(eachItem => (
        <li key={eachItem.id} className="list-item">
          <input
            className="input"
            id={eachItem.id}
            type="radio"
            name="paymentMethod"
            disabled={eachItem.isDisabled}
            onChange={updatePaymentMethod}
          />
          <label
            className={`label ${eachItem.isDisabled ? 'disabled-label' : ''}`}
            htmlFor={eachItem.id}
          >
            {eachItem.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="payment-container">
      {isOrderPlaced ? (
        <p className="success-text">Your order has been placed successfully</p>
      ) : (
        <>
          <h1 className="heading">Payments Details</h1>
          <p className="para">Payment Method</p>
          {renderPlaymentMethodInput()}
          <div className="order-details">
            <p className="para">Order details:</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price: RS {getTotalPrice()}/-</p>
          </div>
          <button
            type="button"
            className="confirm-button"
            disabled={paymentMethod === ''}
            onClick={onPlaceOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}

export default Payment
