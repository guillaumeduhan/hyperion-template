'use client';
// import Login from "@/components/Login";
import Header from "@/components/Header";
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  let [user, setUser] = useState<any>({
    email: "guillaume@gmail.com"
  });
  let [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);

        // Your code for fetching the current user goes here

      } catch (error) {
        // Handle error here
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  // if (!user) return <Login />

  if (loading) return <div>Loading...</div>

  return (
    <AppContext.Provider value={{
      user,
      setUser
    }}>
      <Header />
      <main>
        {children}
      </main>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}