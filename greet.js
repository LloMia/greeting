var namesGreeted = {};

for (var i=0; i<namesGreeted.length; i++){
}

var inputText = document.querySelector("#inputText");
var outputText=document.querySelector("#outputText");
var count = document.querySelector('#calculate');
click = 0;


function greet() {

  if(namesGreeted[inputText.value] === undefined){
      namesGreeted[inputText.value] = 1;
    if (document.getElementById('english').checked){
      click++;
      outputText.innerHTML = "Greeting, " + inputText.value;
      document.getElementById('inputText').value="";

    }
    else if(document.getElementById('Setswana').checked) {
      click++;
      outputText.innerHTML = "Dumela, " + inputText.value;
      document.getElementById('inputText').value="";


    }
    else if(document.getElementById('French').checked){
      click++;
      outputText.innerHTML = "Bonjour, " + inputText.value;
      document.getElementById('inputText').value="";
    }

    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have greeted " + localStorage.clickcount + " time(s).";
    }

  }else if(namesGreeted[inputText.value] !== undefined){
    if (document.getElementById('english').checked){
      outputText.innerHTML = "Greeting, " + inputText.value;
      document.getElementById('inputText').value = "";

    }
    else if(document.getElementById('Setswana').checked) {
      outputText.innerHTML = "Dumela, " + inputText.value;
      document.getElementById('inputText').value = "";


    }
    else if(document.getElementById('French').checked){
      outputText.innerHTML = "Bonjour, " + inputText.value;
      document.getElementById('inputText').value ="";
    }
  }
}

var resetClear = document.getElementById('clearreset');
resetClear.addEventListener('click', resetBtn)

function resetBtn(){
localStorage.clickcount = 0
document.getElementById("result").innerHTML = "You have greeted " + localStorage.clickcount + " time(s).";

}
