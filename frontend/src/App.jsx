import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gigs from "./pages/Gigs";
import GigDetails from "./pages/GigDetails";
import PostGig from "./pages/PostGig";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gigs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gigs/:id" element={<GigDetails />} />
        <Route path="/post" element={<PostGig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
