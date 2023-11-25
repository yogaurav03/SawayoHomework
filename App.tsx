import React from "react";
import { AppStateProvider } from "./src/context/AppStateContext";
import { AppNavigator } from "./src/navigation";

export default function App() {
  return (
    <AppStateProvider>
      <AppNavigator />
    </AppStateProvider>
  );
}
