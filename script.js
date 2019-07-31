	document.getElementsById('container').onchange = function() {
		var bill = Number(document.getElementsById('billtotal').value;
		var tipPercent = document.getElementsById('tipinput').value;
		var Split = document.getElementsById('splitinput').value;
		var tipvalue = bill * (tipPercent/100);
		var newbilleach = (bill + tipvalue) / Split;
		var tipeach = tipvalue / Split;

		document.getElementsById('tipoutput').innerHTML = tipPercent + "%"; 
		document.getElementsById('splitoutput').innerHTML = Split; 
		document.getElementsById('newbill').innerHTML = "$" + newbilleach.toFixed(2);
		document.getElementsById('tipeach').innerHTML = "$" + tipeach.toFixed(2);
	}