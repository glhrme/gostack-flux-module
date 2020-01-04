import React, { useState, useEffect } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import api from '../../services/api'
import { ProductList } from './styles'
import { formatPrice } from '../../util/format'

export default function Home() {

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
              <img width="100%" src={image} alt="Tenis" />
              <strong>{title}</strong>
              <span>{formatedPrice}</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16}/> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          )
        }) }
    </ProductList>
  )
}
