import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    id:this.props.id
    // tags: ["tag1", "tag2", "tag3"]
  };
  //   constructor() {
  //      super();
  //      this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };
  handleDecreament = () => {
    if( this.state.value !== 0 ) {
      this.setState({value:this.state.value - 1});
    }
   
  }
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There Are No tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  render() {
    return (
      <Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button style={{marginLeft: '10px', padding: '0, 7px'}}
          onClick={() => this.handleIncrement({id:7})}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button style={{marginLeft: '10px', padding: '0, 7px'}}
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm"
        >
          -
        </button>
        {/* { this.state.tags.length === 0 && "please create a new tag!"}
        {this.renderTags()} */}
        <br />
      </Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
