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
import CreatePortal from "./Component/Basics/CreatePortal";
import StarRating from "./Component/MachineCoding/StarRating/StarRating.js";
import FetchAPI from "./Component/MachineCoding/FetchAPI/FetchAPI";
import TryHarder from "./TryHarder.jsx";
import Counter from "./Component/MachineCoding/Counter/Counter.jsx";
import GuessNumber from "./Component/MachineCoding/GuessNumber/GuessNumber.jsx";
function App() {
  const [one, setOne] = useState(1);
  const [on, setOn] = useState(1);
  return (
    <div className="App" id="model-root">
      {/* <HigherOrderComponentsPractice /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseMemoHook /> */}
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
      {/* <CreatePortal /> */}
      {/* <StarRating /> */}
      {/*  <FetchAPI /> */}
      {/* <TryHarder /> */}
      {/* <Counter/> */}
      <GuessNumber/>
    </div>
  );
}

export default App;
