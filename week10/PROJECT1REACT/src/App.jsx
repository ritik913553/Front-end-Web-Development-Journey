import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { Link, Route, Routes, useLocation } from "react-router-dom";
function App(){

  const {search,pathname}= useLocation();
  // console.log(search,pathname);

  return (
    <div className="h-screen w-screen flex">
      {(pathname != "/" || search.length > 0) && (
          <Link to="/" className="absolute left-[20%] top-[3%] bg-blue-200 rounded px-3 py-1 text-zinc-500" >Home</Link>
      ) }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details  />} />
      </Routes>
    </div>
  )
}
export default App;