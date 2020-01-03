import React, { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'
import Tenis from '../../assets/images/tenis.jpg'

export default function Home() {

  const [ num, addNum ] = useState([1,2,3,4,5])

  return (
    <ProductList>
        { num.map(x => {
          return (
            <li>
              <img width="100%" src={Tenis} alt="Tenis" />
              <strong>Tênis muito loco</strong>
              <span>R$ 129,90</span>

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
