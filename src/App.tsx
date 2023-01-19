import TestLess from "./test-less";
function App() {
  const env = import.meta.env;
  console.log("import.meta.env", env);
  return (
    <div className="App">
      <TestLess />
    </div>
  );
}

export default App;
