import Controller from "./redux-toolkit/components/Controller";
import DisplayCounter from "./redux-toolkit/components/DisplayCounter";

function App() {
  return (
    <>
      <DisplayCounter />
      <div className="raw">
      <Controller/>
      </div>
    </>
  );
}

export default App;
