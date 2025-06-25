function permitirAcceso() {
  document.getElementById('verificacion-edad').style.display = 'none';
}

function bloquearAcceso() {
  document.body.innerHTML = '';
  const bloqueo = document.createElement('div');
  bloqueo.innerHTML = `
    <div style="background: #264755; color:#White; height:66.1em; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
      <h1 class="alerta">⚠️ Acceso Denegado ⚠️ </h1>    
      <p class="alerta">- Debes ser mayor de edad para acceder a este sitio -</p>
    </div>`;
  document.body.appendChild(bloqueo);
}

window.onload = function () { 
  document.getElementById('verificacion-edad').style.display = 'flex';
};  
