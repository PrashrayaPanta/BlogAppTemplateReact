import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import BlogDetail from "./Pages/Customer/Post/BlogDetail";
import Register from "./Pages/auth/Register";
import Login from "./Pages/auth/Login";

import CategoriesProduct from "./Pages/Customer/Categories/CategoriesProduct";

import * as Pages from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="categories/:id" element={<BlogCategory />} /> */}
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/register" element={<Pages.Auth.Register />} />
            <Route path="/login" element={<Pages.Auth.Login />} />
            <Route path="/categories/:id" element={<CategoriesProduct />} />
            {/* Admin */}
            {/* Categories */}
            <Route
              path="/categories"
              element={<Pages.Admin.Categories.List />}
            />
            <Route
              path="/categories/edit"
              element={<Pages.Admin.Categories.Edit />}
            />
            <Route
              path="/categories/add"
              element={<Pages.Admin.Categories.Create />}
            />
            {/* Post */}
            <Route path="/posts" element={<Pages.Admin.Post.List />} />
            <Route path="/posts/edit" element={<Pages.Admin.Post.Edit />} />\
            <Route path="/posts/add" element={<Pages.Admin.Post.Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
