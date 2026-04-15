function login() {
  let user = document.getElementById("user").value.trim();
  let pass = document.getElementById("pass").value.trim();

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("❌ Access Denied");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

function simulate() {
  alert("🚀 Simulation Running...\nAll units deployed successfully!");
}
