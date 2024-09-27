document.getElementById("sim").addEventListener("click", function() {
  document.getElementById("question1").classList.add("hidden");
  document.getElementById("question2").classList.remove("hidden");
});

document.getElementById("nao").addEventListener("click", function() {
  alert("Tá me tirando? Vou te levar pras ideias.");
});

document.getElementById("sim2").addEventListener("click", function() {
  document.getElementById("question2").classList.add("hidden");
  document.getElementById("question3").classList.remove("hidden");
});

document.getElementById("nao2").addEventListener("click", function() {
  alert("Não tem opção rapa, é sim ou sim.");
});

document.getElementById("sim3").addEventListener("click", function() {
  document.getElementById("question3").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
});

document.getElementById("nao3").addEventListener("mouseover", function(event) {
  var button = event.target;
  var rect = button.getBoundingClientRect();
  var randomX = Math.floor(Math.random() * (window.innerWidth - rect.width));
  var randomY = Math.floor(Math.random() * (window.innerHeight - rect.height));
  button.style.position = "absolute";
  button.style.top = randomY + "px";
  button.style.left = randomX + "px";
});
    
