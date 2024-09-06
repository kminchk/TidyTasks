import { useState } from "react";

import "@fontsource-variable/inter";
import "./App.css";
import TidyTasks from "./MainContents/TidyTasks";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl text-red-600">Tidy</h1>
        <h1 className="font-bold text-5xl text-white">Task</h1>
      </div>

      <div className="card">
        <TidyTasks />
      </div>
      <p className="read-the-docs">
        Read the
        <a
          href="https://daisyui.com/docs/layout-and-typography/"
          className="underline"
          target="_blank"
        >
          docs
        </a>
        to get started.
      </p>
    </>
  );
}

export default App;
