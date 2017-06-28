import React, {PropTypes, Component} from 'react'

import './ProductRow.css'

export default class ProductRow extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <tr className='productRow'>
        <td>{this.props.name}</td>
        <td>{this.props.qty}</td>
        <td>${this.props.price}</td>
        <td>
          <img src={this.props.img} />
        </td>
      </tr>
    )
  }
}

ProductRow.propTypes = {
  name: PropTypes.String,
  qty: PropTypes.Number,
  price: PropTypes.Number,
  img: PropTypes.String
}
