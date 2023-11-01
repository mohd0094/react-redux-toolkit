import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/cartSlice'

const ProductCart = () => {
   const count = useSelector(state => state.counter.value)
   const dispatch = useDispatch(increment, decrement)
  return (
    <>
    <button aria-label="Increment value" onClick={() => dispatch(increment()) }>Increment</button>
        <span>{count}</span>

        <button aria-label="Decrement value" onClick={() => dispatch(decrement()) }>Decrement</button>
    </>
  )
}

export default ProductCart
