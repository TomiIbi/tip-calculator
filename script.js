	document.getElementById('container').onchange = function() {
		var bill = Number(document.getElementById('billtotal').value);
		var tipPercent = document.getElementById('tipinput').value;
		var Split = document.getElementById('splitinput').value;
		var tipvalue = bill * (tipPercent/100);
		var newbilleach = (bill + tipvalue) / Split;
		var tipeach = tipvalue / Split;

		document.getElementById('tipoutput').innerHTML = tipPercent + "%"; 
		document.getElementById('splitoutput').innerHTML = Split; 
		document.getElementById('newbill').innerHTML = "$" + newbilleach.toFixed(2);
		document.getElementById('tipeach').innerHTML = "$" + tipeach.toFixed(2);
	}