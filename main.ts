//Jaime Alfonso 202116525 j.alfonsor
import { Serie } from './serie.js';

import { dataSeries } from './DataSeries.js';

let SeriesTbody: HTMLElement = document.getElementById('Series')!;
const AvgTemporadas: HTMLElement = document.getElementById("AvgTemporadas")!;
renderSeriesInTable(dataSeries);
console.log('Calculando promedio');
AvgTemporadas.innerHTML = `${getAvgTemporadas(dataSeries)}`
let tarjeta: HTMLElement = document.getElementById("cards")!;

Tarjeta(dataSeries);

function renderSeriesInTable(Series: Serie[]): void {
    console.log('Desplegando Series');
    Series.forEach((Serie) => {
      let trElement = document.createElement(`tr`);
      trElement.className="table-secondary"
      trElement.innerHTML = `<td>${Serie.id}</td>
                             <td id="fh${Serie.id}"><a href="#card${Serie.id}" data-toggle="collapse" aria-expanded="false" aria-controls="card${Serie.id}">${Serie.nombre}</a></td>
                             <td>${Serie.canal}</td>
                             <td>${Serie.temporadas}</td>`;
      SeriesTbody.appendChild(trElement);
    });
  }

  function getAvgTemporadas( Series:Serie[]): number {
    let AvgTemporadas: number = 0;
    Series.forEach((Serie) => AvgTemporadas = AvgTemporadas + Serie.temporadas);
    return AvgTemporadas/Series.length;
  }

  function Tarjeta(Series:Serie[]):void{
    Series.forEach((Serie) => {
      let divElement=document.createElement("div");
      divElement.className="accordion-item";
      divElement.innerHTML =  `<div id="card${Serie.id}" class="accordion-collapse collapse" aria-labelledby="fh${Serie.id}" data-parent="#cards">
                                <div class="accordion-body">
                                  <div class="card" style="max-width: 18rem">
                                    <img class="card-img-top" src=${Serie.imagen} alt="Card image cap">
                                    <div class="card-body"> 
                                      <h5 class="card-title"> ${Serie.nombre} </h5> 
                                      <p> ${Serie.descripcion} </p> 
                                      <a href="#">${Serie.link}</a> 
                                    </div> 
                                  </div>
                                </div>
                              </div>`
      tarjeta.appendChild(divElement);                            
    })                               
  }