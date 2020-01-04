import React from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';
import Tenis from '../../assets/images/tenis.jpg'

export default function Cart() {
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
          <tr>

            <td>
              <img src={Tenis} width="100%" />
            </td>

            <td>
              <strong>Tenis muito loco</strong>
              <span>R$ 129,00</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input readOnly type="number" value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong> R$ 258,90 </strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>

          </tr>
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