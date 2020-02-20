document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	const width = document.getElementById('tileWidth');
	const height = document.getElementById('tileHeight');
	const tDepth = document.getElementById('tileDepth');
	const gWidth = document.getElementById('groutWidth');
	const area = document.getElementById('tileArea');
	const waste = document.getElementById('wasteVal');
	// const percent = waste.value;

	// const resultOutput = document.getElementById('result');

	// document.addEventListener('DOMContentLoaded', reset);
	document.getElementById('calc').addEventListener('click', calculate);

	// function reset() {
	// 	document.getElementById('alert').style.display = 'block';
	// }

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
			let adhesive = Math.ceil(area.value * 3);
			let grout = Math.ceil(
				((tileLength * tDepth.value * gWidth.value * 1.65) / tileArea) *
					(area.value * waste.value)
			);

			results.innerHTML = `
		<div class='mb-2>
		<div  class='my-1'><small>TILE AREA: <span class='highlight'>${
			area.value
		}m<sup>2</sup></span></small></div>
		<div  class='my-1'><small>TILE SIZE: <span class='highlight'>${
			width.value
		}mm x ${height.value}mm x ${tDepth.value}mm</span></small></div>
		<div  class='my-1'><small>GROUT WIDTH: <span class='highlight'>${
			gWidth.value
		}mm</span></small>
		</div>
  <div class="row text-center">
    <div class="col mb-3">
      <div class='shadow-sm'>
        <div class='resultCalc py-3 bg-white'>${result}</div>
        <div class='bg-info text-light'>TILES</div>
      </div>
    </div>
    <div class="col mb-3">
      <div class='shadow-sm'>
			<div class="resultCalc py-3 bg-white">${wastage}</div>
        <div class='bg-info text-light'>TILES +${Math.floor(waste.value * 100) -
					100}%</div>
      </div>
    </div>
  </div>
  <div class="row text-center">
    <div class="col mb-3">
      <div class='shadow-sm'>
			<div class="resultCalc py-3 bg-white">${adhesive}<small>kg</small></div>
			<div class='bg-info text-light'>ADHESIVE</div>
			</div>
    </div>
    <div class="col mb-3">
      <div class='shadow-sm'>
			<div class="resultCalc py-3 bg-white">${grout}<small>kg</small></div>
			<div class='bg-info text-light'>GROUT</div>
      </div>
    </div>
  </div>
</div>
		`;
		} else {
			results.innerHTML = `<div class="alert alert-danger text-center shadow-sm" role="alert">
				INPUT TILE DATA!
			</div>`;
		}
	}

	document.getElementById('clear').addEventListener('click', clear);

	function clear() {
		width.value = '';
		height.value = '';
		tDepth.value = '';
		gWidth.value = '';
		area.value = '';
		// resultOutput.innerHTML = ``;
	}
	// Set AdMobAds options:
	admob.setOptions({
		publisherId: 'ca-app-pub-8816517022745547/6622224221' // Required
	});

	admob.createBannerView();
}
