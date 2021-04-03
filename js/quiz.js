function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    if(question1=="Ludwig Bemelmans"){
        correct++;
    }
    if(question2=="12"){
        correct++;
    }
    if(question3=="Pepito"){
        correct++;
    }
    if(question4=="A Dog"){
        correct++;
    }
    if(question5=="Danielle"){
        correct++;
    }
    
    var message =["You really Love Madeline!", "You are awesome", "That's just okay", "You should watch the series"];
    var pictures =["images/win.gif", "images/awesome.gif", "images/ok.gif", "images/lose.gif"];

    var range;
       if(correct<1){
           range = 3;
       }
       if(correct>0 && correct<3){
           range = 2;
      }
      if(correct>2 && correct<5){
          range = 1;
   }
      if(correct>4){
          range = 0;
      }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("side").style.visibility = "hidden";

    document.getElementById("message").innerHTML = message[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}