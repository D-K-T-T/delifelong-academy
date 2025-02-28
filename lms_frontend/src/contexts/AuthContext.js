// //// filepath: /home/deshawn/django-apps/django_lms/lms_frontend/src/contexts/AuthContext.js
// import React, { createContext, useState, useEffect, useCallback } from "react";

// export const AuthContext = createContext({});

// export function AuthProvider({ children }) {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);

//     const checkAuth = useCallback(async () => {
//         const token = localStorage.getItem("token");
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
//                     "Accept": "application/json",
//                     "Content-Type": "application/json",
//                     "Authorization": `Token ${token}`
//                 }
//             });
//             const data = await response.json();
//             if (response.ok && data.authenticated && data.user) {
//                 setIsAuthenticated(true);
//                 setUser(data.user);
//             } else {
//                 localStorage.removeItem("token");
//                 setIsAuthenticated(false);
//                 setUser(null);
//             }
//         } catch (error) {
//             console.error("Auth check failed:", error);
//             localStorage.removeItem("token");
//             setIsAuthenticated(false);
//             setUser(null);
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         checkAuth();
//     }, [checkAuth]);

//     const refreshAuth = async () => {
//         setLoading(true);
//         await checkAuth();
//     };

//     const value = { isAuthenticated, loading, user, refreshAuth };

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     );
// }
//// filepath: /home/deshawn/django-apps/django_lms/lms_frontend/src/contexts/AuthContext.js
// import React, { createContext, useState, useEffect, useCallback, useRef } from "react";

// export const AuthContext = createContext({});

// export function AuthProvider({ children }) {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);
//     // Use a ref to prevent overlapping auth checks
//     const checkingRef = useRef(false);
    

//     const checkAuth = useCallback(async () => {
//         console.log("AuthProvider called");
//         if (checkingRef.current) {
//             console.log("Already checking auth, skipping");
//             return;
//         }
//         checkingRef.current = true;

//         const token = localStorage.getItem("token");

//         if (!token) {
//             setIsAuthenticated(false);
//             setUser(null);
//             setLoading(false);
//             checkingRef.current = false;
//             return;
//         }

//         try {
//             const response = await fetch("http://127.0.0.1:8000/api/auth/status/", {
//                 method: "GET",
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application/json",
//                     "Authorization": `Token ${token}`
//                 }
//             });
//             const data = await response.json();
//             console.log("Auth response:", data);
//             if (response.ok && data.authenticated && data.user) {
//                 setIsAuthenticated(true);
//                 setUser(data.user);
//             } else {
//                 localStorage.removeItem("token");
//                 setIsAuthenticated(false);
//                 setUser(null);
//             }
//         } catch (error) {
//             console.error("Auth check failed:", error);
//             localStorage.removeItem("token");
//             setIsAuthenticated(false);
//             setUser(null);
//         } finally {
//             setLoading(false);
//             checkingRef.current = false;
//         }
//     }, []);

//     useEffect(() => {
//         checkAuth();
//     }, []);

//     const refreshAuth = async () => {
//         setLoading(true);
//         await checkAuth();
//     };

//     const value = { isAuthenticated, loading, user, refreshAuth };

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     );
// }
import React, { createContext, useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const checkingRef = useRef(false);
    const navigate = useNavigate();

    const checkAuth = useCallback(async () => {
        console.log("AuthProvider called");
        if (checkingRef.current) {
            console.log("Already checking auth, skipping");
            return;
        }
        checkingRef.current = true;

        const token = localStorage.getItem("token");
        console.log("Token:", token);

        if (!token) {
            console.log("No token found");
            setIsAuthenticated(false);
            setUser(null);
            setLoading(false);
            checkingRef.current = false;
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/status/", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                }
            });
            const data = await response.json();
            console.log("Auth response:", data);
            if (response.ok && data.authenticated && data.user) {
                setIsAuthenticated(true);
                setUser(data.user);
            } else {
                console.log("Auth failed or user not staff");
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch (error) {
            console.error("Auth check failed:", error);
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setLoading(false);
            checkingRef.current = false;
        }
    }, [navigate]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const refreshAuth = async () => {
        setLoading(true);
        await checkAuth();
    };

    const logout = () => {
        console.log("Logging out");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
        navigate("/teacher-login");
    };

    const value = { isAuthenticated, loading, user, refreshAuth, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
