import React, { Component } from 'react';
// import Component_0 from './Component_0';
// import Component_1 from './Component_1';
// import Component_2 from './Component_2';
import { MyContext, MyProvider, ThemeProvider } from './ThemeContext';
import MyClassComponent from './Component_2';
import MyClassComponent0 from './Component_0';
import MyClassComponent1 from './Component_1';


// export default class Index extends Component {
//     render() {
//         return (
//             <>
//                 <ThemeProvider.Provider value={'black'}>
//                     <Component_0 />
//                     <Component_1 />
//                     <Component_2 />
//                 </ThemeProvider.Provider>
//             </>
//         );
//     }
// }

export default class Index extends React.Component {
  render() {
    console.log(this.context);
    const { themeColor, toggleTheme } = this.context;
    return (
      <div className={`${themeColor}`} style={{ backgroundColor: themeColor }} >
        <ThemeProvider>
          {/* The rest of your components */}
          <MyClassComponent />
          <MyClassComponent0 />
          <MyClassComponent1 />
        </ThemeProvider>
      </div>
    );
  }
}