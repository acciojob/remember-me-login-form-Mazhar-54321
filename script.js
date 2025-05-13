//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  // Check if credentials exist in localStorage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline";
  }

  // Submit form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save to localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "inline";
    } else {
      // Remove stored credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  // Login as existing user
  existingBtn.addEventListener("click", () => {
    const username = localStorage.getItem("username");
    if (username) {
      alert(`Logged in as ${username}`);
    }
  });
});
