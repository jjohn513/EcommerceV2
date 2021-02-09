import React, {Component} from 'react'
import Product from './product'
import Title from './title'
import {ProductConsumer} from '../context'



export default class Productlist extends Component {

    render() {
        let filteredProducts = this.props.products.filter((product)=> {
            return product.title.indexOf(this.state.search) !== -1;
        })
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="our" title="products"/>

                    {/* //filter */}
                    <input label="Search Products" icon="search" searchFilter={this.onchange}/>

                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.filteredProducts.map( product => {
                                    return <Product key={product.id} product={product}/>
                                })
                            }}
                        </ProductConsumer>

                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}