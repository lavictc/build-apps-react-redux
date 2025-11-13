import React from "react";
import { createRoot } from "react-dom/client";

function Hi() {
  return <p>Hi.</p>;
}

const rootElement = document.getElementById("app");
createRoot(rootElement).render(<Hi />);
