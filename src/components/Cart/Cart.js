import React, { Component } from 'react'

import ProductRow from './ProductRow/ProductRow'
import Create from './Create/Create'
import GrandTotal from './GrandTotal/GrandTotal'

/**
 * Cart
 */
export class Cart extends Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)

    this.state = {
      grandTotal: 0,
      products: [],
      subtotals: []
    }
  }

  newdsa = () => {}

  updateGrandTotal = (id, newSubTotal) => {
    let subtotals = this.state.subtotals
    subtotals[id] = newSubTotal
    console.log(subtotals)
    let grandTotal = 0

    for (var prop in subtotals) {
      grandTotal += subtotals[prop]
    }

    this.setState({
      grandTotal: grandTotal,
      subtotals: subtotals
    })
  }

  createProduct = product => {
    let newProduct = {}
    newProduct.title = product.title
    newProduct.price = product.price
    newProduct.id = product.id

    let products = this.state.products
    products.push(newProduct)

    this.setState({
      products: products
    })
  }

  createProductRows = () => {
    let productRows = []

    this.state.products.forEach((product, index) => {
      productRows.push(
        <ProductRow
          title={product.title}
          price={product.price}
          grandtotal={this.updateGrandTotal}
          id={product.id}
        />
      )
    })

    return productRows
  }

  render() {
    const rows = this.createProductRows()

    return (
      <div className="row" id="cart">
        <div className="col-md-12 productRows">
          {rows}
        </div>
        <div className="col-md-12">
          <Create createProduct={this.createProduct} />
        </div>
        <div className="col-md-12">
          <GrandTotal value={this.state.grandTotal} />
        </div>
      </div>
    )
  }
}
export default Cart
