import React from "react";
import AppNavigation from "./AppNavigation"; // The navigation component
import { AuthProvider } from "./context/AuthContext"; // Authentication context

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
