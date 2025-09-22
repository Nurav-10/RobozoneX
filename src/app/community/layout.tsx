import React from "react";
import Navbar from "../components/Navbar"
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Rightbar from "./components/Rightbar";

const RootLayout=({children}:{children:React.ReactNode})=>{
   return (
      <div className="flex flex-row w-screen h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="sidebar flex flex-row gap-3 xl:w-[16vw] md:w-[20vw] sm:w-[30vw]">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col w-full">
        <Topbar />

        {/* Page content will come here */}
        <div className="flex h-full w-full">
        <main className="w-[70vw]">{children}</main>
        <Rightbar/>
        </div>
      </div>
    </div>
   )
}

export default RootLayout;