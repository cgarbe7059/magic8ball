let answers = ["Heck Yes!", 
               "Without a doubt", 
               "What you asking me for?",
               "Not in a million years", 
               "Most likely",  
               "Yes",
               "Don't count on it", 
               "Not looking good",
               "Ummm... ask again later", 
               "You got it dude", 
               "What did you say?", 
               "Concentrate and ask again"];

window.onload = function() {
   var eight = document.getElementById("eight");
   var answer = document.getElementById("answer");
   var eightball = document.getElementById("eight-ball");
   var question = document.getElementById("question");
   
   eightball.addEventListener("click", function() {
     if (question.value.length < 1) {
       alert('Enter a question!');
     } else {
       eight.innerText = "";
       var num = Math.floor(Math.random() * Math.floor(answers.length));
       answer.innerText = answers[num];
     }
   });
};