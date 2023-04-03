import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";

import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Movie from "./pages/Movie";
import Recommendation from "./pages/Recommendation";
import Series from "./pages/Series";
import Signup from "./pages/Signup";
import Trend from "./pages/Trend";
import Pick from "./pages/Pick";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recommadation" element={<Recommendation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/pick"
            element={
              <ProtectedRoute>
                <Pick />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
