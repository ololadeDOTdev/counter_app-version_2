import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Counter from "./routes/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "*",
    element: (
      <div className="container">
        <h1 className="error-page">
          Oops! It looks like you have stumbled upon a 404 error page.
        </h1>
        <h2>Do not worry, even the best explorers get off track sometimes🙂</h2>
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
