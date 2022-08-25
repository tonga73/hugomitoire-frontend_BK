import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// LAYOUTS
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";

// VIEWS
import { HomeView } from "./views/HomeView";
import { AdminView } from "./views/AdminView";
import { AdminUserView } from "./views/AdminUsersView";
import { AdminBooksView } from "./views/AdminBooksView";
import NewBook from "./views/NewBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminView />} />
        <Route path="new-book" element={<NewBook />} />
        <Route path="admin-users" element={<AdminUserView />} />
        <Route path="admin-books" element={<AdminBooksView />} />
      </Route>
    </Routes>
  );
}

export default App;
