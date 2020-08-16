import React from 'react'
const Product = ({id, count, handleIncrement, handleDecrement, handleDelete}) => {
    return (
        <div>
            {count}
            <button onClick={()=>{handleIncrement(id)}}> increment </button>
            <button onClick={()=>{handleDecrement(id)}}> decrement </button>
            <button onClick={()=>{handleDelete(id)}}> delete</button>
        </div>
    )
}
export default Product;