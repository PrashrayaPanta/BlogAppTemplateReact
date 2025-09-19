import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BlogCategory from "./Pages/BlogCategory";
import BlogDetail from "./Pages/BlogDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="categories/:id" element={<BlogCategory />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
