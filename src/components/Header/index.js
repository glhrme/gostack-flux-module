import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'

import { Link } from 'react-router-dom'

import { Container, Cart } from './style'

import logo from '../../assets/images/logo.svg'

export default function index() {
    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt='RocketShoes'/>
            </Link>

            <Cart to='/cart'>
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"/>
            </Cart>
        </Container>
    )
}
