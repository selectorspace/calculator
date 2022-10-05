

 document.addEventListener("DOMContentLoaded", function(event) {
	let Summp = document.getElementById('splus');
	let plus = document.querySelectorAll(".pluss");
	// alert(plus.length);
	for (let i=0; i <= plus.length-1; i++){
		// alert(plus[i]);
		plus[i].addEventListener("change", function sum() {
			if (plus[i].value == ""){
				plus[i].value=0;
			};
			let splus = parseInt(plus[0].value) + parseInt(plus[1].value) + parseInt(plus[2].value)  + parseInt(plus[3].value) + parseInt(plus[4].value) ;
			Summp.value = splus;

		let p10 =  document.getElementById('proc10');
		let p15 =  document.getElementById('proc15');
		let pr10 =  document.getElementById('pr10');
		let pr15 =  document.getElementById('pr15');
			let cr10 = splus * 0.10;
			let zao15 = splus * 0.15;
			// alert(cr10);
			// alert(zao15);
		p10.value = cr10;	
		p15.value = zao15;	
		pr10.value = cr10;	
		pr15.value = zao15;	
		});
	
	}

/*Кінець частини Прибуток*/

	let Costs = document.getElementById('costs');
	let minus = document.querySelectorAll(".minuss")
	for (let i=0; i <= minus.length-1; i++){
		minus[i].addEventListener("change", function summ() {
			if	(minus[i].value == ""){
				minus[i].value=0;
			};
		let pr10 =  document.getElementById('pr10');
		let pr15 =  document.getElementById('pr15');

			let sminus = parseInt(minus[0].value) + parseInt(minus[1].value) + parseInt(minus[2].value)  + parseInt(minus[3].value);

			let asminus = parseInt(sminus) + parseInt(pr10.value) + parseInt(pr15.value);
			Costs.value = asminus;
// Підсумок
	let Summp = document.getElementById('splus');
			let result = document.getElementById('result');
			result.value = parseInt(Summp.value) - parseInt(Costs.value);
		let rsplus = document.getElementById('rsplus');
		let rcosts = document.getElementById('rcosts');
			rsplus.value = parseInt(Summp.value);
			rcosts.value = asminus;
		}


	)}
})
