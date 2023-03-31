import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Language from "./pages/Language";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import Signup from "./pages/Signup";
import Trend from "./pages/Trend";

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
          <Route path="/language" element={<Language />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
