import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "./components/HomeComponent";
import LoadingComponent from "./components/LoadingComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path=":id" element={<LoadingComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


