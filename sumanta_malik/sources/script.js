function getData(){
	let star_name= document.getElementById('user-input').value;
	let dob = document.getElementById('dob').value;
	let result = null;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://swapi.co/api/people/?name='+star_name+'&birth_year='+dob);
	xhr.send();
	xhr.onload=function(){
		if(xhr.status==200){
			result = xhr.response;
			printData(result);
		}else{
			console.log('Error code is :'+xhr.status);
		}
	}
	// window.alert('hello');
}
function printData(input){
	let p_elmnt = document.getElementById('root');
	let c_elmnt = document.createElement('p');
	if (input==null) {// check wheather input is null
		c_elmnt.textContent='Error ! currency data found and request invalid';
	}
	else{
		c_elmnt.textContent = input; // this line print the json data on p tag
		let receive = JSON.parse(input);
		showData(receive);
		// console.log(receive);
	}
	// p_elmnt.appendChild(c_elmnt);
}
// window.alert('hello');
function showData(receive){
	// console.log('hello');
	var p_elmnt = document.getElementById('cast-detail');
	for(i=0;i<8;i++){
		var c_elmnt = document.createElement('p');
		c_elmnt.setAttribute('class','star_bio'+i);
		p_elmnt.appendChild(c_elmnt);
	}
	document.querySelector('.star_bio0').textContent="Height :"+receive.results[i].height;
	document.querySelector('.star_bio1').textContent="Name :"+receive.results[i].name;
	document.querySelector('.star_bio2').textContent="Mass :"+receive.results[i].mass;
	document.querySelector('.star_bio3').textContent="Hair Color :"+receive.results[i].hair_color;
	document.querySelector('.star_bio4').textContent="Skin Color :"+receive.results[i].skin_color;
	document.querySelector('.star_bio5').textContent="Date Of Birth :"+receive.results[i].birth_year;
	document.querySelector('.star_bio6').textContent="Gender :"+receive.results[i].gender;
}
