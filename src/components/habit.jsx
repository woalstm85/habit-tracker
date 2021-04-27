import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  /*
  componentDidMount() {
    // componentDidMount : 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때에 호출
    console.log(`habit:' ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    // componentWillUnmount : 컴포넌트가 DOM 상에서 제거될 때에 호출
    console.log(`habit:' ${this.props.habit.name}  will mounted`);
  }
  */
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
