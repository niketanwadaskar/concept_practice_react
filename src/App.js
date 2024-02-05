import './App.css';
import HigherOrderComponentsPractice from './Component/HigherOrderComponentsPractice';
import UseCallBackHook from './Component/UseCallBackHook';
import UseMemoHook from './Component/UseMemoHook';
import ErrorBoundary from './Component/ErrorBoundary';
import CustomHook from './Component/CustomHooks'
import Redux from './Component/Redux/UIForRedux'
import ClassedBasedComponent from "./Component/ClassedBasedComponent";
function App() {
  return (
    <div className="App">
      {/* <HigherOrderComponentsPractice /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseMemoHook/> */}
      {/* <ErrorBoundary/> */}
      {/* <CustomHook /> */}
      <Redux />
      {/* <UseLayoutEffect /> */}
      {/* <ClassedBasedComponent /> */}
    </div>
  );
}

export default App;