import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {

  const [token, setToken] = useState(null);
  const [refresh, setRefresh] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken, refresh, setRefresh }}>
      {children}
    </AuthContext.Provider>
  );
}
