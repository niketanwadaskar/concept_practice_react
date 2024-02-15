// import React, { Component } from 'react';
// import ThemeContext from './UserContext';

import React from "react";
import { MyContext } from "./ThemeContext";

// export default class Component_2 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: "black"
//         };
//     }

//     static contextType = ThemeContext; // Replace YourContextName with your actual context name

//     componentDidMount() {
//         // Access context value using this.context
//         console.log(this.context);
//         this.setState({ color: this.context });
//     }

//     changeContext(color) {
//         this.setState({ color: color });
//         // You cannot directly assign a new value to this.context in a class component
//         // It's read-only and automatically assigned by React
//         this.context = color;
//     }
//     componentDidUpdate() {
//         // Access context value using this.context
//         console.log(this.context);
//     }

//     render() {
//         return (
//             <div onClick={() => this.changeContext('yellow')} style={{ backgroundColor: this.state.color, color: "yellow" }}>
//                 Yellow
//             </div>
//         );
//     }
// }



// import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Adjust the path accordingly

class MyClassComponent2 extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { themeColor, toggleTheme } = this.context;

    return (
      <div style={{ backgroundColor: themeColor }}>
        <p style={{ color: themeColor }}>{themeColor}</p>
        <button onClick={()=>toggleTheme("black")}>Toggle Theme</button>
      </div>
    );
  }
}

export default MyClassComponent2;
