var timer = null;
var countdownNumber = 3;

var changeState = function(state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber = 3;
	document.getElementById('countdown1').innerHTML = countdownNumber; 
	document.getElementById('countdown2').innerHTML = countdownNumber;	

	//chose yarn- countdown
	if (state==3) {
		countdownFunction(5,1);
	}

	//chose mouse- countdown
	else if (state==4) {
		countdownFunction(6,2);
	}

	//results of kitty play
	else if (state==5) {
		var success=setTimeout( function() {
			var rand = Math.round(Math.random()*10);
			if (rand > 10) {
				changeState(7);} // success-yarn
			else if (rand > 2) {
				changeState(8);} //tangled-yarn
			else {
				changeState(11);} //bored
		},2000);
	}

	else if (state==6){
		var success=setTimeout( function() {
			var rand = Math.round(Math.random()*10);
			if (rand > 5) {
				changeState(9);} // success-mouse
			else if (rand > 2) {
				changeState(10);} //under table-mouse
			else {
				changeState(11);} //bored
		},2000);
	}

	else if (state==7) {
		//do something
	}
	
}

var countdownFunction = function(state,countID) {
	timer = setInterval( function() {
		countdownNumber = countdownNumber - 1;
		document.getElementById('countdown'+countID).innerHTML = countdownNumber;
		if (countdownNumber <= 0) {
			changeState(state);
		}
	}, 1000);
}