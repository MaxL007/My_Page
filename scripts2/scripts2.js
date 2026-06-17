let selectedColor = null;

const challenges = [
  { pos: "A2", color: "blue" },
  { pos: "B1", color: "red" },
  { pos: "C3", color: "green" }
];

let current = 0;
function showQuestion() {
  const q = challenges[current];
  document.getElementById("question").innerText =
    `Pinte o ${q.pos} de ${q.color}`;
}

showQuestion();

document.querySelectorAll(".color").forEach(c => {
  c.onclick = () => selectedColor = c.dataset.color;
});

document.querySelectorAll("canvas").forEach(canvas => {

  canvas.width = 100;
  canvas.height = 100;

  const ctx = canvas.getContext("2d");

  canvas.addEventListener("mousedown", () => {

    const pos = canvas.dataset.pos;
    const q = challenges[current];

    if (pos !== q.pos || selectedColor !== q.color) {
      document.getElementById("result").innerText = "❌ Lugar ou cor errada!";
      return;
    }

    ctx.fillStyle = selectedColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document.getElementById("result").innerText = "✅ Correto!";

    current++;
    if (current < challenges.length) {
      setTimeout(showQuestion, 1000);
    } else {
      document.getElementById("question").innerText = "🎉 Finalizado!";
    }

  });

});
