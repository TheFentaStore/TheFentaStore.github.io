document.addEventListener("DOMContentLoaded", () => {
  const esMayor = confirm("¿Eres mayor de edad?");

  if (!esMayor) {
    document.getElementById("contenido").style.display = "none";
    document.getElementById("bloqueado").style.display = "flex";
  }
});
