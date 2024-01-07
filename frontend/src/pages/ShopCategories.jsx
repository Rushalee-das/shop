import React, {useContext} from 'react'
import './CSS/ShopCategories.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCategories = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategories