import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Counter from "./routes/Counter";
import { Link } from "react-router-dom";

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
        <h2 className="error-page-2 err">
          Do not worry, even the best explorers get off track sometimes🙂
        </h2>

        <div className="counter-back counter-back-1">
          <Link to="/Counter">
            <button>Go to Counter</button>
          </Link>
        </div>
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
