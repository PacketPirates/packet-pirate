import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ClientNav from "./components/ClientNav";
import Home from "./components/Home";
import About from "./components/About";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import "./App.css";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ClientNav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route
            path='/Home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
           
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
