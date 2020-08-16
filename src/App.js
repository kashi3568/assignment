import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './component/Product';
import Counter from './component/Counter';

function App() {
  const [productLists, setProductLists] = useState([
    { id: 0, count: 0 },
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]);
  const [totalProductCount, setTotalProductsCount] =useState(0);
  const handleIncrement = (key) => {
    let updatedProductLists = [ ...productLists]
    updatedProductLists = updatedProductLists.map((item) => {
      if(key === item.id){
        item.count += 1; 
      }
      return item;
    });
    setProductLists(updatedProductLists); 
  }
  const handleDecrement = (key) => {
    let updatedProductLists = [...productLists]
      updatedProductLists = updatedProductLists.map((item) => {
        if(key === item.id && item.count > 0){
          item.count -= 1; 
        }
        return item;
      });
      setProductLists(updatedProductLists);
  }
  const handleDelete = (key) => {
    let updatedProductLists = [ ...productLists]
    console.log(key);
    updatedProductLists = updatedProductLists.filter((item) => item.id !== key);
    setProductLists(updatedProductLists); 
  }
  useEffect(()=>{
    if(productLists){
    let totalProductCount = productLists.map((item) => item.count);
    totalProductCount = totalProductCount.reduce((a, b) => a + b, 0)
    setTotalProductsCount(totalProductCount);
    }
  },[productLists]);

  return (
    <div className="App">
      <Counter totalCount={totalProductCount}/>
      {
        productLists.map((item) => (
          <Product
          key={item.id} 
          id={item.id} 
          count={item.count} 
          handleIncrement={handleIncrement} 
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
          />
        ))
      }
    </div>
  );
}

export default App;
