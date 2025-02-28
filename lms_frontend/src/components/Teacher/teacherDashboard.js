// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import TeacherSidebar from "./teacherSidebar";

// function TeacherDashboard() {
//     const { isAuthenticated, loading, user } = useAuth();
//     const navigate = useNavigate();

//     React.useEffect(() => {
//         // Only redirect if we're sure about the authentication state
//         if (!loading && (!isAuthenticated || !user?.is_staff)) {
//             navigate("/teacher-login");
//         }
//     }, [loading, isAuthenticated, user, navigate]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     // Don't render anything while redirecting
//     if (!isAuthenticated || !user?.is_staff) {
//         return null;
//     }

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <aside className="col-md-3">
//                     <TeacherSidebar />
//                 </aside>
//                 <section className="col-md-9">
//                     Teacher Dashboard
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default TeacherDashboard;
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import TeacherSidebar from "./teacherSidebar";

function TeacherDashboard() {
    const { isAuthenticated, loading, user } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {

        if (!loading && (!isAuthenticated || !user?.is_staff)) {
            console.log("Redirecting to teacher-login");
            navigate("/teacher-login");
        }
    }, [loading, isAuthenticated, user, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated || !user?.is_staff) {
        return null;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    Teacher Dashboard
                </section>
            </div>
        </div>
    );
}

export default TeacherDashboard;
