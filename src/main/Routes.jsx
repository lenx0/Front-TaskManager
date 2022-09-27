import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/pages/home/Home";

export default (props) => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);