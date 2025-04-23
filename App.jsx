import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./component/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HOME from "./pages/Home";

function App(){
  const[isAuth,setIsAuth]=useState(false)

  return(
  <div className=" w-25 d-flex justify-content-center text-center align-item-center m-4 border border-2 rounded">
      <Router>
      <NavBar IsAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<HOME/>}/>
        <Route path='/Login' element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/dashboard" element={isAuth? <Dashboard/> : <Navigate to='/Login'/>}/>
      </Routes>
    </Router>
  </div>
  );
}
export default App