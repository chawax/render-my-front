import { Navigate } from "react-router-dom";

function HomePage() {
  return <Navigate to="/movies" replace={true} />;
}

export default HomePage;
