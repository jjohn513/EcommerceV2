import React, {Component} from 'react'
import { ProductConsumer } from '../../context'
import Title from '../title'
import CartColumns from './cartcolumns'
import EmptyCart from './emptycart'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value

                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart"/>
                                    <CartColumns />
                                </React.Fragment>
                                
                            )
                        }else{
                            return <EmptyCart></EmptyCart>
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}