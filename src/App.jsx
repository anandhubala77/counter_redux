import "./App.css";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center w-100 "
        style={{ height: "100vh" }}
      >
        <div className="d-flex justify-content-center align-items-center flex-column p-5 rounded" style={{backgroundColor:'white'}}>
          <h1 className="text-primary ">Counter Application</h1>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
