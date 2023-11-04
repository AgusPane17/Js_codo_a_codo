const precioTicket = 200;
const descEstudiante = 0.2;
const descTrainee = 0.5;
const descJunior = 0.85;

const limpiar = document.getElementById("btnLimpiar");
let totalPago = document.getElementById("totalPago");

limpiar.onclick = () => {
    totalPago.innerHTML = "";
};

document.getElementById("btnResumen").onclick = () =>{
    let nombreUser =  document.getElementById("nombreUser").value;
    let apellidoUser = document.getElementById("apellidoUser").value;
    let emailUser = document.getElementById("emailUser").value;
    let cantTicket = parseInt(document.getElementById("quantityTicket").value);
    let tipoTicket = document.getElementById("categoriaSelect").value;

    cantTicket = isNaN(cantTicket) ? 1 : cantTicket;

    if (
      nombreUser == '' ||
      apellidoUser == '' ||
      emailUser == ''
    ) {
      Swal.fire({
        icon: "error",
        title: "Debes completar tus datos...",
        text: "Revisa tus datos si estan completos",
      });
      return;
    }

    if (cantTicket <= 0) {
      Swal.fire({
        icon: "error",
        title: "Creo que te equivocaste en la cantidad...",
        text: "Corrige la cantidad",
      });
      return;
    }
    switch (tipoTicket) {
      case "Estudiante":
        totalPago.innerHTML = (precioTicket * descEstudiante)*cantTicket;
        break;
      case "Trainee":
        totalPago.innerHTML = (precioTicket * descTrainee)* cantTicket;
        break;
      case "Junior":
        totalPago.innerHTML = (precioTicket * descJunior)* cantTicket;
        break;
      default:
        totalPago.innerHTML = precioTicket;
        break;
    }
  
}