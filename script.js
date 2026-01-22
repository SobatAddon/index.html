function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "admin" && p === "123") {
    document.getElementById("msg").innerText = "Login berhasil ✅";
  } else {
    document.getElementById("msg").innerText = "Login gagal ❌";
  }
}
