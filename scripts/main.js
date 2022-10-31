import { dataSeries } from './DataSeries.js';
var SeriesTbody = document.getElementById('Series');
var AvgTemporadas = document.getElementById("AvgTemporadas");
renderSeriesInTable(dataSeries);
console.log('Calculando promedio');
AvgTemporadas.innerHTML = "".concat(getAvgTemporadas(dataSeries));
var tarjeta = document.getElementById("cards");
Tarjeta(dataSeries);
function renderSeriesInTable(Series) {
    console.log('Desplegando Series');
    Series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.className = "table-secondary";
        trElement.innerHTML = "<td>".concat(Serie.id, "</td>\n                             <td id=\"fh").concat(Serie.id, "\"><a href=\"#card").concat(Serie.id, "\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-controls=\"card").concat(Serie.id, "\">").concat(Serie.nombre, "</a></td>\n                             <td>").concat(Serie.canal, "</td>\n                             <td>").concat(Serie.temporadas, "</td>");
        SeriesTbody.appendChild(trElement);
    });
}
function getAvgTemporadas(Series) {
    var AvgTemporadas = 0;
    Series.forEach(function (Serie) { return AvgTemporadas = AvgTemporadas + Serie.temporadas; });
    return AvgTemporadas / Series.length;
}
function Tarjeta(Series) {
    Series.forEach(function (Serie) {
        var divElement = document.createElement("div");
        divElement.className = "accordion-item";
        divElement.innerHTML = "<div id=\"card".concat(Serie.id, "\" class=\"accordion-collapse collapse\" aria-labelledby=\"fh").concat(Serie.id, "\" data-parent=\"#cards\">\n                                <div class=\"accordion-body\">\n                                  <div class=\"card\" style=\"max-width: 18rem\">\n                                    <img class=\"card-img-top\" src=").concat(Serie.imagen, " alt=\"Card image cap\">\n                                    <div class=\"card-body\"> \n                                      <h5 class=\"card-title\"> ").concat(Serie.nombre, " </h5> \n                                      <p> ").concat(Serie.descripcion, " </p> \n                                      <a href=\"#\">").concat(Serie.link, "</a> \n                                    </div> \n                                  </div>\n                                </div>\n                              </div>");
        tarjeta.appendChild(divElement);
    });
}
