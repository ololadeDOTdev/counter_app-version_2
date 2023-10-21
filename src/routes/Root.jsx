import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import { ErrorBoundary } from "react-error-boundary";

export default function Root() {
  return (
    <>
      <div className="container">
        <ErrorBoundary
          fallback={
            <h4 className="error-boundary">
              Oops! It seems one of our components took a coffee break ☕️. We
              will have it back in action faster than you can say bug spray🙂
            </h4>
          }
        >
          <h1 className="heading">Enter the World of Counting</h1>
          <p>Where Every Click Counts and Every Count Matters</p>
          <div>
            <h2>Your Journey to Precision Awaits! Tap to begin counting </h2>
            <Link to="/counter">
              <p className="btn-link">counter app</p>
            </Link>
          </div>
          <div>
            <h2>
              Explore our 404 page for a surprise! Click this link to discover
            </h2>

            <Link to="ihcsugcasycgsycgs">
              <p className="btn-link">404 Error Page</p>
            </Link>

            <ErrorTest />
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
}
