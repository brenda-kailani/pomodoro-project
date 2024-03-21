let timer; // Variável para armazenar o identificador do setInterval
let timerRunning = false; // Variável para controlar se o timer está em execução
let milliseconds = 0; // Variável para armazenar os milissegundos

function startTimer() {
  if (!timerRunning) {
    timerRunning = true; // Ativa o timer
    timer = setInterval(updateTimer, 10); // Inicia o intervalo de atualização do timer a cada 10 milissegundos
    document.getElementById("startBtn").style.display = "none"; // Esconde o botão de iniciar
    document.getElementById("stopBtn").style.display = "inline-block"; // Exibe o botão de parar
    document.getElementById("resetBtn").style.display = "none"; // Esconde o botão de reset
  }
}

function stopTimer() {
  clearInterval(timer); // Para o intervalo do timer
  timerRunning = false; // Desativa o timer
  document.getElementById("startBtn").style.display = "inline-block"; // Exibe o botão de iniciar
  document.getElementById("stopBtn").style.display = "none"; // Esconde o botão de parar
  document.getElementById("resetBtn").style.display = "inline-block"; // Exibe o botão de reset
}

function resetTimer() {
  clearInterval(timer); // Para o intervalo do timer
  timerRunning = false; // Desativa o timer
  milliseconds = 0; // Reseta os milissegundos
  document.querySelector(".timer-display").textContent = "00:00.000"; // Atualiza o display do timer para 00:00.000
  document.getElementById("startBtn").style.display = "inline-block"; // Exibe o botão de iniciar
  document.getElementById("stopBtn").style.display = "none"; // Esconde o botão de parar
  document.getElementById("resetBtn").style.display = "none"; // Esconde o botão de reset
}

function updateTimer() {
  milliseconds++; // Incrementa os milissegundos
  const displayElement = document.querySelector(".timer-display"); // Seleciona o elemento que exibe o timer
  const minutes = Math.floor((milliseconds / 6000) % 60); // Calcula os minutos
  const seconds = Math.floor((milliseconds / 100) % 60); // Calcula os segundos
  const milisecs = milliseconds % 100; // Calcula os milissegundos
  displayElement.textContent = `${(minutes < 10 ? "0" : "") + minutes}:${
    (seconds < 10 ? "0" : "") + seconds
  }.${(milisecs < 10 ? "00" : milisecs < 100 ? "0" : "") + milisecs}`; // Atualiza o display com o tempo formatado

  if (minutes === 25 && seconds === 0 && milisecs === 0) {
    stopTimer();
    alert(
      "Pomodoro completo! Agora aperte o botão para saber o exercício que fará por 5 minutos."
    ); // Exibe uma mensagem informando que o Pomodoro foi completado
  }
}