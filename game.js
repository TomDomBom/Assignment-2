		var wins = 0;
		var loss = 0;
		var ties = 0;
		var rockCount = 0;
		var paperCount = 0;
		var scissorsCount = 0;
		var playCount = 0;
		var choices = ["Rock", "Paper", "Scissors"];
		
		function rockSelect() {
		document.getElementById('playerC').innerHTML = choices[0]; // Print out rock by player selected
		}
        function paperSelect() {
		document.getElementById('playerC').innerHTML = choices[1]; // Print out paper by player selected
		}
        function scissorsSelect() {
		document.getElementById('playerC').innerHTML = choices[2]; // Print out scissors by player selected
		}
		function winner() {
            wins++;
            document.getElementById('numWins').innerHTML = wins;
        }
        function loser() {
            loss++;
            document.getElementById('numLoss').innerHTML = loss;
        }
        function tier() {
            ties++;
            document.getElementById('numTies').innerHTML = ties;
        }
		function selection() {
			if (document.getElementById('rock').checked) { // Checks if rock is checked
				play();
			} else if (document.getElementById('paper').checked) { // Checks if paper is checked
				play();
			} else if (document.getElementById('scissors').checked) { //Checks if scissors is checked
				play();
			} else {
				alert("Please select a choice.");
			}
		}
		
		function play() {
        playCount++;
        document.getElementById('playC').innerHTML = playCount;
		var arrayValue = [ Math.floor(Math.random() * 3)]; // returns 0 - 2 for rock paper or scissors
		
            document.getElementById('randomChoice1').innerHTML = choices[arrayValue];
            document.getElementById('randomChoice').innerHTML = choices[arrayValue];
            
            if (document.getElementById('rock').checked) {
                if(choices[arrayValue] == choices[0]) { // Computer picked rock
                tier();
                rockCount++;
                document.getElementById('rockC').innerHTML = rockCount;
                    
                } else if(choices[arrayValue] == choices[2]) { // Computer picked scissors
                winner();
                scissorsCount++;
                document.getElementById('scissorsC').innerHTML = scissorsCount;    
                    
                } else if(choices[arrayValue] == choices [1]) { // Computer picked paper
                loser();
                paperCount++;
                document.getElementById('paperC').innerHTML = paperCount;
                    
                }
            } else if(document.getElementById('paper').checked) {
                if(choices[arrayValue] == choices[1]) { // Computer picked paper
                tier();
                paperCount++;
                document.getElementById('paperC').innerHTML = paperCount;
                    
                } else if(choices[arrayValue] == choices[0]) { // Computer picked rock
                winner();
                rockCount++;
                document.getElementById('rockC').innerHTML = rockCount;
                    
                } else if(choices[arrayValue] == choices [2]) { // Computer picked scissors
                loser();
                scissorsCount++;
                document.getElementById('scissorsC').innerHTML = scissorsCount;   
                
                }
            } else if(document.getElementById('scissors').checked) {
                if(choices[arrayValue] == choices[2]) { // Computer picked scissors
                tier();
                scissorsCount++;
                document.getElementById('scissorsC').innerHTML = scissorsCount;
                    
                } else if(choices[arrayValue] == choices[1]) { // Computer picked paper
                winner();
                paperCount++;
                document.getElementById('paperC').innerHTML = paperCount;    
                    
                } else if(choices[arrayValue] == choices [0]) { // Computer picked rock
                loser();
                rockCount++;
                document.getElementById('rockC').innerHTML = rockCount;    
		      }
            }
        }
    