$("#letsGo").on("click", function(){
	//show a question page
	$("#displayPage").css("display", "block");
	//button to start disappear
	$("#letsGo").css("display", "none");
	//call countdown function
	runTime();
});

//set time for 30 second
var number = 30;
var intervalId;
var	correctAns = 0;
var wrongAns = 0;
var unAns = 0;
var questions = 5;

function runTime(){
	intervalId = setInterval(decrement, 1000);
}
function decrement(){
	number--;
if(number === 0){
		///when time up and not done change to the result page
		stopTime()
		result();
		
	}
	
	$("#clock").html(number);

}

function stopTime(){
	clearInterval(intervalId);
}



//done before time up then click done and show result



$("#done").on("click", function() {

	stopTime()
	result()

});

$(".answer").on("click", function(){
			var choice = $(this).val();
			if (choice == "correct"){
				correctAns++;
			} else if(choice == "wrong"){
				wrongAns++;
			}
});

function result(){

	$("#displayPage").css("display", "none");
	$("#resultPage").css("display", "block");
	$("#correctAns").html(correctAns);
	$("#wrongAns").html(wrongAns);
	unAns = (questions - correctAns - wrongAns);
	$("#unAns").html(unAns);
}
