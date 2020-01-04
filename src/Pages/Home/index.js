import React, { useState, useEffect } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'

import api from '../../services/api'
import { ProductList } from './styles'
import { formatPrice } from '../../util/format'

function Home({dispatch, cartSize}) {

  const [ products, setProducts ] = useState([])

  useEffect(()=>{
    async function searchProducts() {

      const response = await api.get('products')

      const data = response.data.map( prod => ({
        ...prod,
        formatedPrice: formatPrice(prod.price)
      }))

      setProducts(data)

    }

    searchProducts()

  },[])

  function handleAddProduct(prod){

    dispatch({
      type: 'ADD_TO_CART',
      prod
    })
    
  }

  return (
    <ProductList>
        { products.map( prod => {
          const { title, formatedPrice, image, id } = prod
          return (
            <li key={id} >
              <img width="100%" src={image} alt="Tenis" />
              <strong>{title}</strong>
              <span>{formatedPrice}</span>

              <button 
                type="button"
                onClick={ ()=> handleAddProduct(prod) }
              >
                <div>
                  <MdAddShoppingCart size={16}/> {cartSize}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          )
        }) }
    </ProductList>
  )
}

export default connect( state => ({
  cartSize: state.cart.length
}))(Home)