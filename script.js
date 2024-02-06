document.addEventListener("DOMContentLoaded", function () {
  const siBtn = document.getElementById("siBtn");
  const noBtn = document.getElementById("noBtn");
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementsByClassName("close")[0];

  let size = 18; // Tamaño inicial del botón "Sí"

  // Función para hacer crecer el botón "Sí"
  function growButton() {
    size += 2; // Incrementa el tamaño
    siBtn.style.fontSize = size + "px"; // Aplica el nuevo tamaño
  }

  // Evento clic para el botón "No"
  noBtn.addEventListener("click", function () {
    growButton(); // Llama a la función para hacer crecer el botón "Sí"
  });

  // Evento clic para el botón "Sí"
  siBtn.addEventListener("click", function () {
    modal.style.display = "block"; // Mostrar modal al hacer clic en "Sí"
  });

  // Evento clic para cerrar el modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none"; // Ocultar modal al hacer clic en la X
  });
});
