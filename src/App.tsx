import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "./App.css";
import UserLayout from "./pages/userLayout";
import AdminLayout from "./pages/adminLayout";
import ListProjects from "./pages/admin/Project/ListProjects";
import AddProject from "./pages/admin/Project/AddProject";
import ListService from "./pages/admin/Service/ListService";
import AddService from "./pages/admin/Service/AddService";
import EditService from "./pages/admin/Service/EditService";
import EditProject from "./pages/admin/Project/EditProject";
import SignIn from "./pages/admin/SignIn";
import ListAbout from "./pages/admin/About/ListAbout";
import EditAbout from "./pages/admin/About/EditAbout";
import ListSetting from "./pages/admin/Setting/ListSetting";
import EditSetting from "./pages/admin/Setting/EditSetting";
import { ITechology } from "./interfaces/techology";
import { getTechology } from "./api/techology";
import { ICategory } from "./interfaces/category";
import { getCategory } from "./api/category";
import ListCategory from "./pages/admin/Category/ListCategory";
import AddCategory from "./pages/admin/Category/AddCategory";
import EditCategory from "./pages/admin/Category/EditCategory";

function App() {
  const [techologies, setTechologies] = useState<ITechology[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getTechology();
      // console.log(data);
      setTechologies(data);
    })();
    (async () => {
      const { data } = await getCategory();
      // console.log(data);
      setCategories(data);
    })();
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route path="projects" element={<ListProjects />} />
          <Route
            path="projects/add"
            element={
              <AddProject techologies={techologies} categories={categories} />
            }
          />
          <Route
            path="projects/edit/:id"
            element={
              <EditProject techologies={techologies} categories={categories} />
            }
          />
          <Route path="category" element={<ListCategory />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/edit/:id" element={<EditCategory />} />
          <Route path="services" element={<ListService />} />
          <Route path="services/add" element={<AddService />} />
          <Route path="services/edit/:id" element={<EditService />} />
          <Route path="setting" element={<ListSetting />} />
          <Route path="setting/edit/:id" element={<EditSetting />} />
          <Route path="about" element={<ListAbout />} />
          <Route path="about/edit/:id" element={<EditAbout />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
