import MyForm from "./components/MyForm";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Main Form */}
        <MyForm />
      </div>
    </div>
  );
}

export default App;
