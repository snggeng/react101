import React, { Component, PropTypes } from 'react';

/**
 * ProductRow
 */
export class ProductRow extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      subtotal: 0
    }
  }

  componentWillUpdate = (nextProps, nextState) =>{


  }

  onChange = (e) => {
    const qty = e.target.value;
    const subTotal = this.props.price * qty;
    this.props.grandtotal(this.props.id, subTotal);

    this.setState({
      subtotal: subTotal
    });
  }

  onDelete = (e) => {
      console.log('Delete clicked');
      this.props.delete(this.props.id);
  }

  render() {
    return (
      <div className="row product">
        <div className="col-md-3 title">
          {this.props.title}
        </div>
        <div className="col-md-3 price">
          ${this.props.price}
        </div>
        <div className="col-md-3 qtr">
          <input type="number"
                 name="quantity"
                 min={0}
                 max={50}
                 defaultValue={0}
                 onChange={this.onChange}/>
        </div>
        <div className="col-md-1 subtotal">
          ${this.state.subtotal}
        </div>
        <div className="col-md-2 delete">
          <button type="button"
                  className="btn btn-danger"
                  onClick={this.onDelete}>Delete</button>
        </div>
      </div>
    );
  }
}


export default ProductRow;
