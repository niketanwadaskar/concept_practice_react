// import React, { Component } from 'react';
// import ThemeContext from './UserContext';

import React from "react";
import { ThemeContext } from "./ThemeContext";

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

//     changeContext = (color) => {
//         this.setState({ color: color });
//         // Use the context method to update the theme
//         this.context.changeTheme(color);
//     }

//     componentDidUpdate() {
//         // Access context value using this.context
//         console.log(this.context);
//     }

//     render() {
//         return (
//             <div onClick={() => this.changeContext('black')} style={{ backgroundColor: this.state.color, color: "black" }}>
//                 Black
//             </div>
//         );
//     }
// }

class MyClassComponent0 extends React.Component {
    static contextType = ThemeContext;
  
    render() {
      const { themeColor, toggleTheme } = this.context;
  
      return (
        <div style={{ backgroundColor: themeColor }}>
          <p style={{ color: themeColor }}>{themeColor}</p>
          <button onClick={()=>toggleTheme("white")}>Toggle Theme</button>
        </div>
      );
    }
  }
  
  export default MyClassComponent0;