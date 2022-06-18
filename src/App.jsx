function App() {
  // return <Dashboard />;
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyItems: "center",
      }}
    >
      <textarea
        className="editor"
        autoFocus
        spellCheck={false}
        style={{
          padding: "2em",
          fontSize: "20px",
          outline: "none",
          border: "2px solid transparent",
          backgroundColor: "#dddddd",
          borderRadius: "10px",
          margin: "20px auto",
          lineHeight: "1.8em",
          fontWeight: "500",
          minHeight: "80vh",
          maxWidth: "50vw",
          minWidth: "650px",
        }}
        placeholder="thoughts..."
      ></textarea>
    </div>
  );
}

export default App;
