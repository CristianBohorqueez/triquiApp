const elCasillas = document.getElementsByName('data');

console.log(elCasillas)
elCasillas.forEach(data => {
    data.addEventListener('click', resultado);
});

function resultado(data) {
    console.log("clicked", data)
}