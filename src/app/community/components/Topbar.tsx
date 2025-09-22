"use client";
import { Bell, Search } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { PiMoonStars, PiSun } from "react-icons/pi";

const Topbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-fit px-6 flex items-center py-2 border-b w-full common justify-between">
      <div className="flex items-center gap-2 py-1 px-2 rounded-md border common w-fit">
        <Search size={15} />
        <input
          type="text"
          className="w-80 outline-none"
          placeholder="Search post, user, and topics..."
        />
      </div>
      <div className="flex items-center gap-4">
        <div>
          {theme === "dark" ? (
            <PiSun
              className="border rounded-sm  rotate-45 p-1 w-6 h-6"
              onClick={() => setTheme("light")}
            />
          ) : (
            <PiMoonStars
              onClick={() => setTheme("dark")}
              className="border rounded-sm  rotate-45 p-1 w-6 h-6"
            />
          )}
        </div>
        <div className="notification relative flex items-center justify-center">
          <div className="rounded-xl border w-5 h-5 bg-orange-600 text-xs absolute -top-2.5 -right-2.5 flex items-center justify-center">
            4
          </div>
          <Bell size={24} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
