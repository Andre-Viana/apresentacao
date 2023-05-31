let lbl = {
  placeholder: "Busca...",
  perPage: "{select} entradas por página",
  noRows: "Nenhum resultado encontrado",
  info: "Mostrando {start} a {end} de {rows} entradas",
  loading: "Carregando...",
  infoFiltered: "Mostrando {start} a {end} de {rows} entradas (filtrados de {rowsTotal} registros)"
};

function append_configs(data){
  var tbody = document.getElementById('tbody_processos');
  data.forEach(function(object) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + object.assunto + '</td>' +
      '<td>' + object.sigla + '</td>';
      tbody.appendChild(tr);
  });
  
  let table = new JSTable("#table_processos", {labels: {
    placeholder: lbl.placeholder,
    perPage: lbl.perPage,
    noRows: lbl.noRows,
    info: lbl.info,
    loading: lbl.loading,
    infoFiltered: lbl.infoFiltered
  }});
 }
 
function append_digitalizados(data){
  var tbody = document.getElementById('tbody_digitalizados');
  data.forEach(function(object) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + object + '</td>';
      tbody.appendChild(tr);
  });
  
  let table = new JSTable("#table_digitalizados", {labels: {
    placeholder: lbl.placeholder,
    perPage: lbl.perPage,
    noRows: lbl.noRows,
    info: lbl.info,
    loading: lbl.loading,
    infoFiltered: lbl.infoFiltered
  }});
}

var i = 0;
function progress() {
  var dld_csv = document.getElementById("dld_csv");
  dld_csv.style.display = "none";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) dld_csv.style.display = "block";
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}