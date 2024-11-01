// login.js
const btnLogin = document.getElementById("btnLogin");
const spinner = document.getElementById("spinner");
const alertBox = document.getElementById("alertBox");


console.log(window.location.origin);

// Function to handle login
async function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  // Show the spinner and disable the login button
  spinner.classList.remove("tw-hidden");
  btnLogin.disabled = true;

  // Get form data
  const email = document.querySelector("input[name='email']").value;
  const password = document.querySelector("input[name='password']").value;

  // API request setup
  try {
    const response = await fetch(
      `${window.location.origin}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alertBox.classList.remove("tw-hidden", "tw-opacity-0");
      alertBox.classList.add("tw-opacity-100");

      setTimeout(() => {
        alertBox.classList.add("tw-opacity-0");
        alertBox.classList.remove("tw-opacity-100");

        // Redirect to the main page after 1 second
        setTimeout(() => {
          window.location.href = data.url;
        }, 500);
      }, 1000);
    } else {
      // Handle login failure
      alert("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  } finally {
    // Hide the spinner and enable the button
    spinner.classList.add("tw-hidden");
    btnLogin.disabled = false;
  }
}

// Attach event listener
btnLogin.addEventListener("click", handleLogin);
