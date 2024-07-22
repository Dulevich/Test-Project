const formAuthEl = document.querySelector("#form-auth");

const handleformAuthSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formAuthEl);
    const newUser = Object.fromEntries(formData);
    alert("Form submitted successfully");

    window.location.href = "home.html";
}

formAuthEl.addEventListener("submit", handleformAuthSubmit);