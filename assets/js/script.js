const nombreGasto = document.getElementById("nombreGasto");
const descripcionGasto = document.getElementById("descipcionGasto");
const valorGasto = document.getElementById("valorGasto");

let listaNombresGastos = [];
let listaDescripcionesGastos = [];
let listaValoresGastos = [];

function clickBoton() {
  let nombre = nombreGasto.value;
  let descripcion = descripcionGasto.value;
  let valor = valorGasto.value;

  if (nombre === "" || descripcion === "" || valor === "") {
    alert("Por favor, llene todos los campos");
    return;
  }

  listaNombresGastos.push(nombre);
  listaDescripcionesGastos.push(descripcion);
  listaValoresGastos.push(valor);

  actualizarListaGastos();
  limpiar();
}

function actualizarListaGastos() {
  const lista = document.getElementById("listaDeGastos");
  const total = document.getElementById("totalGastos");
  let htmlLista = "";
  let totalGastos = 0;
  listaNombresGastos.forEach((elemento, index) => {
    let valorGasto = Number(listaValoresGastos[index]);
    let descripcion = listaDescripcionesGastos[index];

    if (valorGasto > 1000) {
      alert("El valor del gasto no puede ser mayor a $1000");
      return;
    }

    htmlLista += `<li>${elemento} - ${descripcion} - $${valorGasto.toFixed(2)}
        <button onclick="editarGasto(${index})">Editar</button>
        <button onclick="eliminarGasto(${index})">Eliminar</button>
    </li>`;
    totalGastos += Number(listaValoresGastos[index]);
  });

  lista.innerHTML = htmlLista;
  total.innerHTML = totalGastos.toFixed(2);
}

function editarGasto(index) {
  nombreGasto.value = listaNombresGastos[index];
  descripcionGasto.value = listaDescripcionesGastos[index];
  valorGasto.value = listaValoresGastos[index];
  eliminarGasto(index);
}

function eliminarGasto(index) {
  listaNombresGastos.splice(index, 1);
  listaDescripcionesGastos.splice(index, 1);
  listaValoresGastos.splice(index, 1);
  actualizarListaGastos();
}

const limpiar = () => {
  document.getElementById("nombreGasto").value = "";
  document.getElementById("valorGasto").value = "";
  document.getElementById("descipcionGasto").value = "";
};
