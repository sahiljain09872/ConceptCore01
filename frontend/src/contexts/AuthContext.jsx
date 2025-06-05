import { createContext, useContext, useEffect, useState } from 'react';
import { verifyTokenApi } from '../../apis/auth'; // Import the function we fixed above

const AuthContext = createContext();
import { useNavigate } from 'react-router-dom'; 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    console.log('User state changed:', user);
  } , [user])

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found, user is not authenticated');
        setAuthLoading(false);
        return;
      }

      const result = await verifyTokenApi(token);
      console.log('Token verification result:', result);
      if (result.success) {
        setUser(result.user);
      } else {
        localStorage.removeItem('token');
      }

      setAuthLoading(false);
    };

    verifyUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    Navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, authLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
