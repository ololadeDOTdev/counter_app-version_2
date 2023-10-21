import { useState } from "react";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Oh... wow, there is an error somewhere in the react tree");
  }
  return (
    <div>
      <h2>Please press the button to test the error boundary</h2>
      <button onClick={() => setHasError(true)}>ErrorBoundary test</button>
    </div>
  );
}

export default ErrorTest;
