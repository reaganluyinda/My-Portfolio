import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";

function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;
