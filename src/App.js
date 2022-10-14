import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={<Write />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
