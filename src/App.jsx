import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";


function App() { 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
         <Route index element={<Home />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/details" element={<BlogDetails />} />
         <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
