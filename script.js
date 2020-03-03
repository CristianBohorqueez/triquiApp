const elCasillas = document.getElementsByName("data");
const victorias = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// console.log(elCasillas)
elCasillas.forEach(data => {
  data.addEventListener("click", resultado);
});
var turn = false;
function resultado(data) {
  // console.log(data, "data");
  const celda = data.target;
  const aplicarClase = turn ? "x" : "o";
  agregar(celda, aplicarClase);
  turns();
  validarVictoria();
}

function agregar(celda, aplicarClase) {
  celda.classList.add(aplicarClase);
}

function turns() {
  turn = !turn;
}
function validarVictoria() {
  if (
    elCasillas[victorias[0][0]].className == "casilla x" &&
    elCasillas[victorias[0][1]].className == "casilla x" &&
    elCasillas[victorias[0][2]].className == "casilla x"
  ) {
    alert("Gano X");
  }

}
