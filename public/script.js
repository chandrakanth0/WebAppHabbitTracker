document.addEventListener("DOMContentLoaded", () => {
    // Login Form Submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const res = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Login successful! Redirecting to dashboard...");
                window.location.href = "/dashboard"; // Redirect to the dashboard
            } else {
                alert("❌ " + data.message); // Show error message if login fails
            }
        });
    }

    // Signup Form Submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const res = await fetch("/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Sign up successful! Redirecting to login...");
                window.location.href = "/login.html"; // Redirect to login page
            } else {
                alert("❌ " + data.error); // Show error message if signup fails
            }
        });
    }
});
