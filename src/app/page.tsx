"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen p-8 sm:p-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <main className="flex flex-col gap-8 items-center sm:items-start text-gray-900 dark:text-white">
          <h1>Hello, {name}</h1>
          <Button onClick={() => setName("Juna")}>Click Me!</Button>
        </main>
      </div>
    </>
  );
};

export default HomePage;
