import "./App.css";
import HigherOrderComponentsPractice from "./Component/Basics/HigherOrderComponentsPractice";
import UseCallBackHook from "./Component/Basics/UseCallBackHook";
import UseMemoHook from "./Component/Basics/UseMemoHook";
import ErrorBoundary from "./Component/Basics/ErrorBoundary";
import CustomHook from "./Component/Basics/CustomHooks";
import Redux from "./Component/Basics/Redux/UIForRedux";
import ClassedBasedComponent from "./Component/Basics/ClassedBasedComponent";
import ContextAPI from "./Component/Basics/ContenxtAPI";
import ReduxToolkit from "./Component/Basics/ReduxToolkit";
import ReactQuery from "./Component/Basics/ReactQuery";
import { useEffect, useState } from "react";
import MultilevelDropdown from "./Component/MachineCoding/MultilevelDropdown";
import DynamicTable from "./Component/MachineCoding/DynamicTable/DynamicTable";
function App() {
  const [one, setOne] = useState(1);
  const [on, setOn] = useState(1);
  function fun() {
    setOne((prev) => prev + 1);
  }
  useEffect(() => {
    console.log("Effect");
  }, []);
  return (
    <div className="App">
      {/* <HigherOrderComponentsPractice /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseMemoHook/> */}
      {/* <ErrorBoundary /> */}
      {/* <CustomHook /> */}
      {/* <Redux /> */}
      {/* <UseLayoutEffect /> */}
      {/* <ClassedBasedComponent /> */}
      {/* <ContextAPI/> */}
      {/* <ReduxToolkit/> */}
      {/* <ReactQuery /> */}
      {/* <MultilevelDropdown /> */}
      {/* <DynamicTable /> */}
      
    </div>
  );
}

export default App;
