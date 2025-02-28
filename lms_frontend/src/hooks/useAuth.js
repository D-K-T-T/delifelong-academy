// import { useState, useEffect } from "react";

// function useAuth() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const checkAuth = async () => {
//             console.log("1. Starting auth check");
//             const token = localStorage.getItem('token');
            
//             try {
//                 const response = await fetch("http://127.0.0.1:8000/api/auth/status/", {
//                     method: "GET",
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                         'Authorization': token ? `Token ${token}` : ''
//                     },
//                     credentials: 'include'
//                 });

//                 console.log("2. Auth response status:", response.status);
//                 const data = await response.json();
//                 console.log("3. Auth data received:", JSON.stringify(data, null, 2));

//                 setIsAuthenticated(data.authenticated);
//                 setUser(data.user);
                
//                 // Log state after updating
//                 console.log("4. Updated auth state:", {
//                     authenticated: data.authenticated,
//                     user: data.user
//                 });
//             } catch (error) {
//                 console.error("5. Auth check failed:", error);
//                 setIsAuthenticated(false);
//                 setUser(null);
//                 localStorage.removeItem('token');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkAuth();
//     }, []);

//     return { isAuthenticated, loading, user };
// }

// export default useAuth;
// import { useState, useEffect } from "react";

// function useAuth() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const checkAuth = async () => {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 setIsAuthenticated(false);
//                 setUser(null);
//                 setLoading(false);
//                 return;
//             }
            
//             try {
//                 const response = await fetch("http://127.0.0.1:8000/api/auth/status/", {
//                     method: "GET",
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                         'Authorization': `Token ${token}`
//                     },
//                     credentials: 'include'
//                 });

//                 const data = await response.json();
                
//                 if (response.ok && data.authenticated) {
//                     setIsAuthenticated(true);
//                     setUser(data.user);
//                 } else {
//                     // Clear invalid token
//                     localStorage.removeItem('token');
//                     setIsAuthenticated(false);
//                     setUser(null);
//                 }
//             } catch (error) {
//                 console.error("Auth check failed:", error);
//                 localStorage.removeItem('token');
//                 setIsAuthenticated(false);
//                 setUser(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkAuth();
//     }, []);

//     return { isAuthenticated, loading, user };
// }

// export default useAuth;
// import { useState, useEffect } from "react";

// function useAuth() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);
//     const [lastCheck, setLastCheck] = useState(0);

//     useEffect(() => {
//         const checkAuth = async () => {
//             // Prevent multiple checks within 5 seconds
//             const now = Date.now();
//             if (now - lastCheck < 5000) {
//                 return;
//             }
//             setLastCheck(now);

//             const token = localStorage.getItem('token');
//             if (!token) {
//                 setIsAuthenticated(false);
//                 setUser(null);
//                 setLoading(false);
//                 return;
//             }
            
//             try {
//                 const response = await fetch("http://127.0.0.1:8000/api/auth/status/", {
//                     method: "GET",
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                         'Authorization': `Token ${token}`
//                     },
//                     credentials: 'include'
//                 });

//                 const data = await response.json();
                
//                 if (response.ok && data.authenticated) {
//                     setIsAuthenticated(true);
//                     setUser(data.user);
//                 } else {
//                     localStorage.removeItem('token');
//                     setIsAuthenticated(false);
//                     setUser(null);
//                 }
//             } catch (error) {
//                 console.error("Auth check failed:", error);
//                 localStorage.removeItem('token');
//                 setIsAuthenticated(false);
//                 setUser(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkAuth();

//         // Optional: Set up an interval to check auth periodically
//         const interval = setInterval(checkAuth, 300000); // Check every 5 minutes

//         return () => clearInterval(interval);
//     }, []); // Remove dependencies that might cause unnecessary re-renders

//     // Add a manual check function that can be called when needed
//     const refreshAuth = async () => {
//         setLoading(true);
//         await checkAuth();
//     };

//     return { isAuthenticated, loading, user, refreshAuth };
// }

// export default useAuth;
// i
// filepath: /home/deshawn/django-apps/django_lms/lms_frontend/src/hooks/useAuth.js
// import { useState, useEffect, useCallback } from "react";

// function useAuth() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);
//     const [lastCheck, setLastCheck] = useState(0);

//     const checkAuth = useCallback(async (force = false) => {
//         const now = Date.now();
//         if (!force && now - lastCheck < 5000) {
//             console.log("Skipping auth check");
//             return;
//         }
//         setLastCheck(now);
//         console.log("Auth check called", now);

//         const token = localStorage.getItem('token');
//         if (!token) {
//             setIsAuthenticated(false);
//             setUser(null);
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await fetch("http://127.0.0.1:8000/api/auth/status/", {
//                 method: "GET",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'Authorization': `Token ${token}`
//                 }
//             });

//             const data = await response.json();
            
//             if (response.ok && data.authenticated && data.user) {
//                 setIsAuthenticated(true);
//                 setUser(data.user);
//             } else {
//                 localStorage.removeItem('token');
//                 setIsAuthenticated(false);
//                 setUser(null);
//             }
//         } catch (error) {
//             console.error("Auth check failed:", error);
//             localStorage.removeItem('token');
//             setIsAuthenticated(false);
//             setUser(null);
//         } finally {
//             setLoading(false);
//         }
//     }, [lastCheck]);

//     useEffect(() => {
//         checkAuth(true);
//         const interval = setInterval(() => checkAuth(false), 300000);
//         return () => clearInterval(interval);
//     }, [checkAuth]);

//     const refreshAuth = async () => {
//         setLoading(true);
//         await checkAuth(true);
//     };

//     return { isAuthenticated, loading, user, refreshAuth };
// }

// export default useAuth;
//// filepath: /home/deshawn/django-apps/django_lms/lms_frontend/src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
    return useContext(AuthContext);
}