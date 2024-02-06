document.addEventListener("DOMContentLoaded", function () {
  const siBtn = document.getElementById("siBtn");
  const noBtn = document.getElementById("noBtn");
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementsByClassName("close")[0];
  const gifImg = document.getElementById("gifImg");

  // Array de URLs de gifs
  const gifs = [
    "https://i.pinimg.com/originals/1e/7c/d0/1e7cd06609bc9837b4ab8951346be298.gif",
    "https://i.gifer.com/origin/91/91ac22c7762d636ac2a3531ed21fa86a_w200.gif",
    "https://i.pinimg.com/originals/ef/96/87/ef9687b36e36605b375b4e9b0cde51db.gif",
    "https://i.pinimg.com/originals/68/87/62/688762968314adc421a4682f1be8e57d.gif",
    "https://i.pinimg.com/originals/73/d7/fd/73d7fdef040948921d2b49849f852e4a.gif",
    "https://i.pinimg.com/originals/73/0d/75/730d75ed729397068c7a89fa7476e305.gif",
    "https://gifdb.com/images/high/cat-kiss-cheek-peach-goma-afexgpkx67pc2k6b.gif",
    "https://i.pinimg.com/originals/a8/3a/90/a83a900ed250aa1ffd2e19ade3d4d926.gif",
    "https://gifdb.com/images/high/cat-kiss-dip-peach-goma-1jfhz0dnkysf9wur.gif",
    "https://i.pinimg.com/originals/34/96/c0/3496c0c38082bbb9c2a988dc10305e1c.gif",
    "https://i.pinimg.com/originals/68/65/dc/6865dc906133527ee83ed83b4f4bc980.gif",
    "https://media1.tenor.com/m/Am5WrKwHbw8AAAAC/kisses-love.gif",
    "https://d2h3d42vkj4fuu.cloudfront.net/d1b395b8ec4bd7c975898a1ff144ace6",
    "https://i.pinimg.com/originals/a8/89/60/a88960c43c3815544a01e8855b33e77e.gif",

    // Agrega más URLs de gifs según sea necesario
  ];

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
    // Mostrar modal al hacer clic en "Sí"
    modal.style.display = "block";
    // Cargar un gif aleatorio
    const randomIndex = Math.floor(Math.random() * gifs.length);
    gifImg.src = gifs[randomIndex];
  });

  // Evento clic para cerrar el modal
  closeBtn.addEventListener("click", function () {
    // Ocultar modal al hacer clic en la X
    modal.style.display = "none";
  });
});
