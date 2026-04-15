function simulate() {
  alert("🚀 Simulation Running...\nAll units deployed!");
}

function login() {
  let user = document.getElementById("user").value.trim();
  let pass = document.getElementById("pass").value.trim();

  console.log("User:", user);
  console.log("Pass:", pass);

  if (user === "admin" && pass === "1234") {
    alert("Login Success ✅");
    window.location.href = "index.html";
  } else {
    alert("❌ Access Denied");
  }
}
