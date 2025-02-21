export function checkLoginStatus() {
    fetch("http://127.0.0.1:8000/api/auth/status/", {
        method: "GET",
        credentials: "include",
    })
    .then((response) => response.json())
    .then((data) => {
        if (!data.authenticated) {
            window.location.href = "/login";  // Redirect to login if not authenticated
        }
    })
    .catch(error => console.error("Error checking login status:", error));
}

