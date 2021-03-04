	var input1Elem, input2Elem, resultElem;

	function init(){
		input1Elem = document.getElementById("input1");
		input2Elem = document.getElementById("input2");
		resultElem = document.getElementById("result");
		document.getElementById("runBtn").onclick = areaCalculations;
	}
	window.onload = init;

	function areaCalculations(){
		var length;
		var width;
		var area;
		
		length = Number(input1Elem.value);
		width = Number(input2Elem.value);
		area = length * width;

		resultElem.innerHTML = "<p>Rektangelns area: " + area + " m<sup>2</sup></p>";
		
		area = 3.14 * length * width / 4;
		resultElem.innerHTML += "<p>Ellipsens area: " + area + " m<sup>2</sup></p>";


		//Arean av en triangel.
		area = length * width / 2;
		resultElem.innerHTML += "<p>Triangelns area: " + area + " m<sup>2</sup></p>";

		//Rektangelns area om längden skulle vara 5 meter längre än vad som anges i textfältet.
		area = (length + 5) * width;
		resultElem.innerHTML += "<p>Rektangelns area om längd ökar med 5 meter: " + area + " m<sup>2</sup></p>";

		//Ellipsens area om längden skulle ökas med 50%.
		area = 3.14 * (length * 1.5) * width / 4;
		resultElem.innerHTML += "<p>Ellipsens area om längd ökar 50%: " + area + " m<sup>2</sup></p>";

		//Triangelns area angivet i kvadratfot istället för kvadratmeter. (1 meter = 3.28 fot)
		area = (length * width * Math.pow(3.28, 2)) / 2;
		resultElem.innerHTML += "<p>Triangelns area i fot: " + area + " ft<sup>2</sup></p>";



	}