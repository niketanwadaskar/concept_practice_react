// CLASSES BASED
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { add, divide, multiply, subtract } from '../../../Component/Redux/Action';

// class Index extends Component {
//   handleActions = (e) => {
//     const num = Number(e.target.value);

//     // Dispatch the actions using the connected action creators
//     this.props.add(num);
//     this.props.multiply(num);
//     this.props.divide(num);
//     this.props.subtract(num);
//   };

//   render() {
//     return (
//       <div>
//         <input onChange={(e) => this.handleActions(e)} type="number" value={this.props.num} />
//         <p>square of above number :- <span>{this.props.multiplication}</span></p>
//         <p>division of above number by 5 :-<span>{this.props.division}</span></p>
//         <p>subtraction of above number by 5 :-<span>{this.props.subtraction}</span></p>
//         <p>addition of above number by 5 :-<span>{this.props.addition}</span></p>
//       </div>
//     );
//   }
// }

// // Map Redux state to component props
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     addition: state.add.num, // Replace with your actual reducer name
//     multiplication: state.multiply.num, // Replace with your actual reducer name
//     division: state.divide.num, // Replace with your actual reducer name
//     subtraction: state.subtract.num, // Replace with your actual reducer name
//   };
// };

// // Connect the component to the Redux store and map action creators to props
// export default connect(mapStateToProps, { add, multiply, divide, subtract })(Index);


// FUNCTION BASED

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, divide, multiply, subtract } from '../../../Component/Redux/Action';

const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); // Replace with your actual reducer name
  console.log(state)
  const handleActions = (e) => {
    const value = Number(e.target.value);
    // Dispatch the actions using the useDispatch hook
    dispatch(add(value));
    dispatch(multiply(value));
    dispatch(divide(value));
    dispatch(subtract(value));
  };

  return (
    <div>
      <input onChange={(e) => handleActions(e)} type="number" />
      <p>square of above number :- <span>{state.multiply.num}</span></p>
      <p>division of above number by 5 :-<span>{state.divide.num}</span></p>
      <p>subtraction of above number by 5 :-<span>{state.subtract.num}</span></p>
      <p>addition of above number by 5 :-<span>{state.add.num}</span></p>
    </div>
  );
};

export default Index;
