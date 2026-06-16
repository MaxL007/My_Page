let selectedColor = null;

// desafios iguais exercício
const challenges = [
  { pos: "A2", color: "blue" },
  { pos: "B1", color: "red" },
  { pos: "C3", color: "green" }
];

let current = 0;

// mostrar pergunta
function showQuestion() {
  const q = challenges[current];
  document.getElementById("question").innerText =
    `Pinte o ${q.pos} de ${q.color}`;
}

showQuestion();

// selecionar cor
document.querySelectorAll(".color").forEach(c => {
  c.onclick = () => selectedColor = c.dataset.color;
});

// configurar pintura
document.querySelectorAll("canvas").forEach(canvas => {

  canvas.width = 100;
  canvas.height = 100;

  const ctx = canvas.getContext("2d");

  canvas.addEventListener("mousedown", () => {

    const pos = canvas.dataset.pos;
    const q = challenges[current];

    // ❌ BLOQUEIO TOTAL (igual atividade)
    if (pos !== q.pos || selectedColor !== q.color) {
      document.getElementById("result").innerText = "❌ Lugar ou cor errada!";
      return;
    }

    // ✅ PINTAR (correta)
    ctx.fillStyle = selectedColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document.getElementById("result").innerText = "✅ Correto!";

    // próxima
    current++;
    if (current < challenges.length) {
      setTimeout(showQuestion, 1000);
    } else {
      document.getElementById("question").innerText = "🎉 Finalizado!";
    }

  });

});