import './App.css';
import HigherOrderComponentsPractice from './Component/HigherOrderComponentsPractice';
import UseCallBackHook from './Component/UseCallBackHook';
import UseMemoHook from './Component/UseMemoHook';
import ErrorBoundary from './Component/ErrorBoundary';
import CustomHook from './Component/CustomHooks'
import Redux from './Component/Redux/UIForRedux'
import ClassedBasedComponent from "./Component/ClassedBasedComponent";
import ContextAPI from "./Component/ContenxtAPI";
import ReduxToolkit from "./Component/ReduxToolkit";
import ReactQuery from "./Component/ReactQuery";
import { useEffect, useState } from 'react';
import MultilevelDropdown from './Component/MultilevelDropdown';
function App() {
  const [one, setOne] = useState(1)
  const [on, setOn] = useState(1)
  function fun() {
    setOne(prev => prev + 1)
  }
  useEffect(() => {
    console.log("Effect")

  }, [])
  return (
    <div className="App">
      {/* <HigherOrderComponentsPractice /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseMemoHook/> */}
      <ErrorBoundary/>
      {/* <CustomHook /> */}
      {/* <Redux /> */}
      {/* <UseLayoutEffect /> */}
      {/* <ClassedBasedComponent /> */}
      {/* <ContextAPI/> */}
      {/* <ReduxToolkit/> */}
      {/* <ReactQuery /> */}
      {/* <MultilevelDropdown /> */}
    </div>
  );
}

export default App;