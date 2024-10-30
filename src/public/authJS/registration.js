// Button and step elements
const elements = {
  btnNext: document.getElementById("btnNext"),
  btnSubmit: document.getElementById("btnSubmit"),
  btnSubmitBack: document.getElementById("btnSubmitBack"),
  step1: document.getElementById("step1"),
  step2: document.getElementById("step2"),
  progress1: document.getElementById("progressBar1"),
  progress2: document.getElementById("progressBar2"),
  eye1: document.getElementById("eye1"),
  eye2: document.getElementById("eye2"),
  togglePassword: document.getElementById("togglePassword"),
  passwordInput: document.getElementById("confirmationPassword"),
  eyePassword1: document.getElementById("eyePassword1"),
  eyePassword2: document.getElementById("eyePassword2"),
  togglePassword1: document.getElementById("togglePassword1"),
  passwordInput1: document.getElementById("password1"),
};

// Step navigation events
elements.btnNext.addEventListener("click", () => toggleSteps(false));
elements.btnSubmit.addEventListener("click", () => Register());
elements.btnSubmitBack.addEventListener("click", () => toggleSteps(true));

function toggleSteps(isStep1Visible) {
  const display1 = isStep1Visible ? "block" : "none";
  const display2 = isStep1Visible ? "none" : "block";
  elements.step1.style.display = display1;
  elements.step2.style.display = display2;
  elements.progress1.style.display = display1;
  elements.progress2.style.display = display2;
}

// Toggle password visibility
function setupTogglePassword(eyeHidden, eyeVisible, toggleBtn, input) {
  eyeHidden.classList.add("hidden");
  toggleBtn.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    eyeHidden.classList.toggle("hidden", !isPassword);
    eyeVisible.classList.toggle("hidden", isPassword);
  });
}
setupTogglePassword(
  elements.eye1,
  elements.eye2,
  elements.togglePassword,
  elements.passwordInput
);
setupTogglePassword(
  elements.eyePassword1,
  elements.eyePassword2,
  elements.togglePassword1,
  elements.passwordInput1
);

// Load data into select elements
async function loadData(apiUrl, selectId, mapFunction) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    populateSelect(selectId, data.data, mapFunction);
  } catch (error) {
    console.error(`Failed to load data from ${apiUrl}:`, error);
  }
}

function populateSelect(selectId, dataList, mapFunction) {
  const selectElement = document.getElementById(selectId);
  dataList.forEach((item) => {
    const { value, text } = mapFunction(item);
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  loadData(
    "https://api-es.alkisahcinema.com/api/country-list",
    "countries",
    (country) => ({
      value: country.id,
      text: `(${country.phone_code}) ${country.name}`,
    })
  );
  loadData(
    "https://api-es.alkisahcinema.com/api/business-type-list",
    "typeBusiness",
    (type) => ({
      value: type.id,
      text: type.name,
    })
  );
});

let changeCountry;
let changeTypeBusiness;

// Set event listener di luar fungsi Register untuk mengupdate nilai dropdown
document.getElementById("countries").addEventListener("change", function () {
  changeCountry = this.value;
  console.log(changeCountry); // Ini akan menampilkan nilai saat pengguna mengganti opsi
});

document.getElementById("typeBusiness").addEventListener("change", function () {
  changeTypeBusiness = this.value;
  console.log(changeTypeBusiness); // Ini akan menampilkan nilai saat pengguna mengganti opsi
});

// Register function
async function Register() {
  try {
    const response = await fetch(
      "https://api-es.alkisahcinema.com/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("businessName").value,
          country_id: changeCountry,
          social: document.getElementById("socialMedia").value,
          type_id: changeTypeBusiness, // Using updated value
          website: document.getElementById("website").value,
          address: document.getElementById("address").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password1").value,
          password_confirmation: document.getElementById("confirmationPassword")
            .value,
        }),
      }
    );
    if (response.ok) {
      window.location.href = "/info-verifikasi";
    } else {
      console.error("Registration failed:", await response.json());
    }
  } catch (error) {
    console.error("Registration failed:", error);
  }
}
