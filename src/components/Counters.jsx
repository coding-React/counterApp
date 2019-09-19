import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 6 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = (counterId) => {
    console.log("called", counterId );
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
