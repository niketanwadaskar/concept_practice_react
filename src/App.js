import './App.css';
import HigherOrderComponentsPractice from './Component/HigherOrderComponentsPractice';
import UseCallBackHook from './Component/UseCallBackHook';
import UseMemoHook from './Component/UseMemoHook';
import ErrorBoundary from './Component/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <HigherOrderComponentsPractice /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseMemoHook/> */}
      <ErrorBoundary/>
    </div>
  );
}

export default App;
