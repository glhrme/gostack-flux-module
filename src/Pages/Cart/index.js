import React from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md'
import { connect } from 'react-redux'

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {

  function handleRemoveProduct(id) {
    dispatch({
      type: 'REMOVE_PRODUCT_CART',
      id: id
    })
  }

  return (
    <Container>
      <ProductTable>
        <thead>

          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>

        </thead>

        <tbody>
          { cart.map( product => (
            <tr>

              <td>
                <img src={product.image} width="100%" />
              </td>

              <td>
                <strong>{product.title}</strong>
                <span>{product.formatedPrice}</span>
              </td>

              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input readOnly type="number" value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>

              <td>
                <strong> R$ 258,90 </strong>
              </td>

              <td>
                <button type="button" onClick={()=> { handleRemoveProduct(product.id) }}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1231,00</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Cart)
