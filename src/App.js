import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import UserDetailsComponent from "./components/UserDetailsComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/user/:id" element={<UserDetailsComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


