import React, { Component, PropTypes } from 'react';
import uuid from 'uuid';

/**
 * Create
 */
export class Create extends Component { // eslint-disable-line react/prefer-stateless-function

   constructor(props){
     super(props);

     this.state = {
       title: "",
       price: "",
       id: uuid.v4()
     };
   }


  onChange = (e) => {
    let state = this.state;

    if(e.target.name == "name") {
      state.title = e.target.value;
    }

    if(e.target.name == "price") {
      state.price = e.target.value;
    }

    this.setState(state);
  }

  onClick = (e) => {
    this.props.createProduct(this.state);

    this.setState({
      title: "",
      price: "",
      id: uuid.v4()
    });
  }


  render() {
    return (
      <section className="row create">
        <div className="col-md-2 name">
          <div className="form-group">
            <input type="text"
                   name="name"
                   placeholder="Name"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.title}/>
          </div>
        </div>
        <div className="col-md-2 price">
          <div className="form-group">
            <input type="number"
                   name="price"
                   min={0}
                   placeholder="Price"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.price}/>
          </div>
        </div>
        <div className="col-md-2 createProduct">
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Create</button>
        </div>
        <div className="col-md-2 col-md-offset-4 calc">
        </div>
      </section>
    );
  }
}

export default Create;
