import React, { Component } from 'react';

// Class component ที่จะทำงานได้สมบูรณ์
class TestHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.incrementCount}>Increase</button>
      </div>
    );
  }
}

// ใช้ class component ภายใน function component
export default function Home() {
  return (
    <div>
      <TestHero />
    </div>
  );
}
