const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#floatingPassword");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    this.classList.toggle("bi-eye");
});

const i = document.querySelector("i");

i.addEventListener('submit', function (e) {
    e.preventDefault();
});