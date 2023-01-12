import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/Landing";
import Tools from "../pages/tools/Tools";
import CaesarCipher from "../pages/tools/CaesarCipher";
import NotFound from "../pages/NotFound";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
        </Route>
        <Route path="/tools">
          <Route index element={<Tools />} />
          <Route path="/tools/caesar-cipher" element={<CaesarCipher />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
