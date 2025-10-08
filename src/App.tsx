import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import BlogDetail from "./Pages/Customer/Post/BlogDetail";

import CategoriesProduct from "./Pages/Customer/Categories/CategoriesProduct";

import * as Pages from "./Pages";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Routes/PrivateRoute";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/profile/edit"
              element={<PrivateRoute element={<Pages.Profile.Edit />} />}
            />
            <Route
              path="/profile/change-password"
              element={
                <PrivateRoute element={<Pages.Profile.ChangePassword />} />
              }
            />
            <Route
              path="/categories/:slug"
              element={<Pages.Customer.Categories.CategoriesProduct />}
            />
            {/* Admin */}
            {/* Categories */}
            <Route
              path="/categories"
              element={
                <PrivateRoute element={<Pages.Admin.Categories.List />} />
              }
            />
            <Route
              path="/categories/edit"
              element={
                <PrivateRoute element={<Pages.Admin.Categories.Edit />} />
              }
            />
            <Route
              path="/categories/add"
              element={
                <PrivateRoute element={<Pages.Admin.Categories.Create />} />
              }
            />
            {/* Post */}
            <Route
              path="/posts"
              element={<PrivateRoute element={<Pages.Admin.Post.List />} />}
            />

            <Route
              path="/posts/edit"
              element={<PrivateRoute element={<Pages.Admin.Post.Edit />} />}
            />
            <Route
              path="/posts/add"
              element={<PrivateRoute element={<Pages.Admin.Post.Create />} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
