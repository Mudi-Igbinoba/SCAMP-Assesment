var fibBtn = document.getElementById('fibonacci');
var repeat;
var result = document.getElementById('fibonacciResult');
var oldnum = 0;
var newnum = 1;
var output = "";
var fiboNums = [];

//Recursively create the sequence
var fibonize = function(r) {
	var p = oldnum;//placeholder
	//Positive numbers only
	if(r > 0) {
		fiboNums.push(newnum);
		oldnum = newnum;
		newnum += p;
		r--;
		fibonize(r);//Fibception
	} else {
		output = "";
		//Cleanly output the numbers
		for(i=0;i<fiboNums.length;i++) {
			output += "<span class='fiboNum'>" + fiboNums[i] + "</span>";
		}
		result.innerHTML = output;
		oldnum = 0;
		newnum = 1;
		fiboNums = [];
	}
}


fibBtn.addEventListener('click', function() {
	repeat = document.getElementById('repeat').value;
	fibonize(repeat);
});