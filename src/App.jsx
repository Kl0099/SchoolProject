import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import SwipersImages from "./components/SwipersImages";
import NavBar from "./components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Infrastructure from "./pages/Infrastructure";
import Academics from "./pages/Acadamics";
import Acadamicss from "./components/Acadamics";
import Addmission from "./components/Addmission";
import RegisterForm from "./pages/Registration";
import Footer from "./components/Footer";
import Gallery from "./pages/Galary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" ">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/about">
          <Route
            path="/about/mission-vision"
            element={<Aboutus />}
          />
          <Route
            path="/about/principle-message"
            element={<Aboutus />}
          />
          <Route
            path="/about/infrastructure-facalities"
            element={<Aboutus />}
          />
          <Route
            path="/about/history"
            element={<Aboutus />}
          />
        </Route>
        {/* infrastructure */}
        <Route path="/infrastructure">
          <Route
            path="/infrastructure/campus"
            element={<Infrastructure />}
          />
          <Route
            path="/infrastructure/lab"
            element={<Infrastructure />}
          />
          <Route
            path="/infrastructure/library"
            element={<Infrastructure />}
          />
          <Route
            path="/infrastructure/transport"
            element={<Infrastructure />}
          />
        </Route>
        {/* accadamics */}
        <Route
          path="/acadamics"
          element={
            <Academics
              title={"Academics"}
              component={<Acadamicss />}
            />
          }
        />
        {/* Admission */}
        <Route
          path="/admission"
          element={
            <Academics
              title={"Admission"}
              component={<Addmission />}
            />
          }
        />
        <Route
          path="/registration"
          element={<RegisterForm />}
        ></Route>
        <Route
          path={"/galary"}
          element={<Gallery />}
        />
      </Routes>
      {/* <SwipersImages /> */}
      <Footer />
    </div>
  );
}

export default App;
