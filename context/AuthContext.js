import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  /*   useEffect(() => checkUserLoggedIn(), []);
   */
  // Register user
  /* const register = async (user) => {
  
    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      router.push('/account/dashboard')
    } else {
      setError(data.message)
      setError(null)
    }
  } */

  // Login user
  const login = async ({ username, password }) => {
    setUser(data.user);
    router.push("/");
  };

  // Logout user
  const logout = async () => {
    setUser(null);
    router.push("/");
  };

  // Check if user is logged in
  /*  const checkUserLoggedIn = async (user) => {
    setUser(data.user);
  }; */

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
