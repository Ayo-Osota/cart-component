import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

// const defaultState = {
//   items: [],
  
// }

const CartContainer = () => {
  // const [state, dispatch] = useReducer(reducer, defaultState);
  const { cart, totalAmount, clearItems } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${totalAmount}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={clearItems}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
