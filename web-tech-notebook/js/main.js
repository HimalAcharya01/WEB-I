
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
  var current = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-links a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("data-page") === current) {
      links[i].classList.add("active");
    }
  }
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-links");
  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
  var form = document.getElementById("contact-form");
  if (!form) return;
  function showError(field, text) {
    document.getElementById(field + "-error").textContent = text;
    return text === "";
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();
    var ok1 = showError("name", name.length < 2 ? "Please write your name." : "");
    var ok2 = showError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "That email does not look right.");
    var ok3 = showError("message", message.length < 10 ? "Please write a little more (10 letters at least)." : "");
    var status = document.getElementById("form-status");
    if (ok1 && ok2 && ok3) {
      status.textContent = "Thanks " + name + ", your message was sent.";
      form.reset();
    } else {
      status.textContent = "";
    }
  });
});
