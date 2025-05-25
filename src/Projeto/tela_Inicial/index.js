function hemogra() {
  let valor = document.getElementById("Ana");

  if (valor.value == "") {
    alert("Selecione um trimestre");
  }
  if (valor.value == "trimestre2") {
    window.electronAPI.trocarTela("Projeto/hemograma/index.html");
  }
}
