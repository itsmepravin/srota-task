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

      {/* Footer */}
      <footer
        style={{
          fontSize: "20px",
          position: "absolute",
          bottom: 0,
          right: "50%",
        }}
      >
        By Pravin Singh
      </footer>
    </div>
  );
}

export default App;
