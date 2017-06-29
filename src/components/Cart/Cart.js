import React, { Component} from 'react';

import ProductRow from '../ProductRow/ProductRow';
import Create from '../Create/Create';
import GrandTotal from '../GrandTotal/GrandTotal';

/**
 * Cart
 */
export class Cart extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      grandTotal: 0,
      products: [],
      subtotals: {}
    }
  }

  updateGrandTotal = (id, newSubTotal) => {

    let subTotals = this.state.subtotals;
    subTotals[id] = newSubTotal;

    let grandTotal = 0;
    for (var prop in subTotals) {
      grandTotal += subTotals[prop];
    }

    this.setState({
      grandTotal: grandTotal,
      subtotals: subTotals
    });
  }

  createProduct = (product) => {

    let newProduct = {};
    newProduct.title = product.title;
    newProduct.price = product.price;
    newProduct.id = product.id;

    let products = this.state.products;
    products.push(newProduct);

    this.setState({
      products: products
    });

  }


  createProductRows = () => {

    var productRows = [];

    this.state.products.forEach((product, index) => {
      productRows.push(<ProductRow title={product.title}
                                   price={product.price}
                                   grandtotal={this.updateGrandTotal}
                                   delete={this.deleteProduct}
                                   id={product.id}
                                   key={product.id} />)
    });

  return productRows;
  }

  deleteProduct = (id) => {
      console.log("deleteProduct: ", id);

      let subTotals = this.state.subtotals;
      delete subTotals[id];

      let products = this.state.products;
      products = products.filter((el) => {
          return el.id != id;
      });

      let grandTotal = 0;
      for (var prop in subTotals) {
        grandTotal += subTotals[prop];
      }


      this.setState({
        products: products,
        subtotals: subTotals,
        grandTotal: grandTotal
      })

  }



  render() {

    const rows = this.createProductRows();

    return (
      <div className="row" id="cart">
        <div className="col-md-12 productRows">
          {rows}
        </div>
        <div className="col-md-12">
          <Create createProduct={this.createProduct}/>
        </div>
        <div className="col-md-12">
          <GrandTotal value={this.state.grandTotal}/>
        </div>
      </div>
    );
  }
}
export default Cart;
