document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
  const width = document.getElementById('tileWidth');
const height = document.getElementById('tileHeight');
const tDepth = document.getElementById('tileDepth');
const gWidth = document.getElementById('groutWidth');
const area = document.getElementById('tileArea');
const waste = document.getElementById('wasteVal');
const percent = waste.value;

const resultOutput = document.getElementById('result');

document.addEventListener('DOMContentLoaded', reset);
document.getElementById('calc').addEventListener('click', calculate);

function reset() {
	document.getElementById('alert').style.display = 'none';
}

function calculate() {
	if (
		width.value !== '' &&
		height.value !== '' &&
		tDepth.value !== '' &&
		gWidth.value !== '' &&
		area.value !== ''
	) {
		let tileArea = width.value * height.value;
		let tileLength = parseFloat(width.value) + parseFloat(height.value);
		let result = Math.ceil((area.value * 1000000) / tileArea);
		let wastage = Math.ceil(result * waste.value);
		let adhesive = area.value * 3;
		let grout = Math.round(
			((tileLength * tDepth.value * gWidth.value * 1.65) / tileArea) *
			area.value
		);

		resultOutput.innerHTML = `
    <div class='card'>
  <div class='card-header'>FOR <span class='highlight'>${
		area.value
	}m<sup>2</sup></span> YOU WILL NEED:</div>
  <div class="row">
    <div class="col">
      <div class="card m-1 ml-3 bg-warning">
        <div class='resultCalc card-header bg-dark text-light'>${result}</div>
        <div>TILES</div>
      </div>
    </div>
    <div class="col">
      <div class="card m-1 mr-3 bg-warning">
			<div class="resultCalc card-header bg-dark text-light">${wastage}</div>
        <div>TILES +${Math.floor(waste.value * 100) - 100}%</div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="card m-1 ml-3 bg-warning">
			<div class="resultCalc card-header bg-dark text-light">${adhesive}<small>kg</small></div>
			<div>ADHESIVE
      </div>
			</div>
    </div>
    <div class="col">
      <div class="card m-1 mr-3 bg-warning">
			<div class="resultCalc card-header bg-dark text-light">${grout}<small>kg</small></div>
			<div>GROUT
			</div>
      </div>
    </div>
  </div>
</div>
    `;
	} else {
		setTimeout(() => {
			document.getElementById('alert').style.display = 'none';
		}, 3000);
		document.getElementById('alert').style.display = 'block';
	}
}

}