import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from "./button"


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* reference to the logo */}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="nav-item ml-5">
                        <Link to="/store" className="nav-link">Products</Link>
                    </li>

                    <li className="nav-item ml-5">
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                      <i className="fas fa-cart-plus"/>
                      My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
 
const NavWrapper = styled.nav`
    background: var(--mainBlue);
        .nav-link{
            color: var(--mainWhite)!important;
            font-size: 1.3rem;
            text-transfrom: capitalize;

        }
        `;