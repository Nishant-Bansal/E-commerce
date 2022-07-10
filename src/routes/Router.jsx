import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ROUTES } from "./routes";

export const AppRouter = memo(() => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {ROUTES.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              element={<item.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
});
