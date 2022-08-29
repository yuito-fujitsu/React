import React, { useCallback } from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <hi>こんにちは！</hi>
      <p>お元気ですか</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
