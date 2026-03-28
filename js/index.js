const btn = document.getElementById("tema-btn");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("claro");

    // troca o emoji
    if (body.classList.contains("claro")) {
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
});