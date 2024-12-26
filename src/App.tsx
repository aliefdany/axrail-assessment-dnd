import DNDContainer from "./components/DNDContainer";

function App() {
  return (
    <>
      <div className="flex flex-col place-items-center">
        <h1 className="mb-4">Simple React Drag n Drop</h1>

        <DNDContainer />
      </div>
    </>
  );
}

export default App;
