
//sets up random number user is trying to match
	$( document ).ready(function(){
		var Random=Math.floor(Math.random()*101+19)
		console.log(Random)
		$('#number').text(Random);

		

//sets up random numbers for each jewel
			var num1= Math.floor(Math.random()*11+1)
	        console.log("num1: " + num1)

	        var num2= Math.floor(Math.random()*11+1)
	        console.log("num2: " + num2)

	         var num3= Math.floor(Math.random()*11+1)
	        console.log("num3: " + num3)

	         var num4= Math.floor(Math.random()*11+1)
	        console.log("num4: " + num4)


//	setting up total variable and printing the wins & losses variables	
	var total= 0;	
	var wins= 0;
	var losses = 0;
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);


//resets the game
function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#number').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        total= 0;
        $('#Combined').text(total);
        } 

//adds the wins to the total
function yay(){
	alert("You won!!!");
		wins++;	
		$('#numberWins').text(wins);
		reset();
}

//adds the losses to the total
function loser(){
	alert ("You lose!!");
		losses++;
		$('#numberLosses').text(losses);
		reset()
}




//sets up click for jewels
		$('#one').on ('click', function(){
			total = total + num1;
			console.log("New total= " + total);
			$('#Combined').text(total);	

						//sets win/lose conditions
					if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}		
		})	

		$('#two').on ('click', function(){
			total = total + num2;
			console.log("New total= " + total);
			$('#Combined').text(total);	

					if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#three').on ('click', function(){
			total = total + num3;
			console.log("New total= " + total);
			$('#Combined').text(total);

	//sets win/lose conditions
						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#four').on ('click', function(){
			total = total + num4;
			console.log("New total= " + total);
			$('#Combined').text(total);	

				
						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}
		});  	

});	
	
