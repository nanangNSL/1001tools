import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Landing from "../pages/Landing";
import Tools from "../pages/tools/Tools";
import CaesarCipher from "../pages/tools/CaesarCipher";
import NotFound from "../pages/NotFound";
import EncodeSHA256 from "../pages/tools/EncodeSHA256";
import ValidateSHA256 from "../pages/tools/ValidateSHA256";
import WebcamCapture from "../pages/tools/RegexGenerator";

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
          <Route path="/tools/encode-sha256" element={<EncodeSHA256/>} />
          <Route path="/tools/validate-sha256" element={<ValidateSHA256/>} />
          <Route path="/tools/regex" element={<WebcamCapture/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
