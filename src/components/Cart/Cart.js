import React, {PropTypes, Component} from 'react'
import ProductRow from './ProductRow/ProductRow'
import Create from './Create/Create'
import GrandTotal from './GrandTotal/GrandTotal'

import './Cart.css'

export default class Cart extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var products = [
      {
        name: 'Bear',
        qty: 2,
        price: 10.00,
        img: 'https://s-media-cache-ak0.pinimg.com/736x/4a/d0/1d/4ad01dec05b1f592066e9d78b9fc6762.jpg'},
      {
        name: 'Fin',
        qty: 1,
        price: 5.00,
        img: 'http://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png/revision/latest?cb=20120921151658'
      },
      {
        name: 'Jake',
        qty: 4,
        price: 50.00,
        img: 'http://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest?cb=20160503014517'
      }
    ]
    return (
      <div>
        <h1 id='title'>My Shopping Cart</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
          </tr>
          {products.map((item) => {
            return (
              <ProductRow name={item.name} price={item.price} qty={item.qty} img={item.img} />
            )
          })}
        </table>
      </div>
    )
  }
}

Cart.propTypes = {

}
