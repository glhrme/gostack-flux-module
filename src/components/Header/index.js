import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { Container, Cart } from './style'

import logo from '../../assets/images/logo.svg'

function Header({ cartSize }) {

    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt='RocketShoes'/>
            </Link>

            <Cart to='/cart'>
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"/>
            </Cart>
        </Container>
    )
}

const mapStateToProps = STATE => ({
    cartSize: STATE.cart.reduce( (amount, product) => {
        amount = amount + product.amount
        return amount
    },0)
})

export default connect(mapStateToProps)(Header)