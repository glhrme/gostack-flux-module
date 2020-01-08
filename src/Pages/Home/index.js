import React, { useState, useEffect } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CartActions from '../../store/modules/cart/actions'
import api from '../../services/api'
import { ProductList } from './styles'
import { formatPrice } from '../../util/format'

function Home({addToCart, amount}) {

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

  return (
    <ProductList>
        { products.map( prod => {
          const { title, formatedPrice, image, id } = prod
          return (
            <li key={id} >
              <img width="100%" src={image} alt={title} />
              <strong>{title}</strong>
              <span>{formatedPrice}</span>

              <button 
                type="button"
                onClick={ ()=> addToCart(prod) }
              >
                <div>
                  <MdAddShoppingCart size={16}/> {amount[prod.id] || 0}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          )
        }) }
    </ProductList>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch)

const mapStateToProps = STATE => ({
  amount: STATE.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)