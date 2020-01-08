var mainArea = document.getElementById("main");
var inputArea = document.getElementById("input");
var form = document.getElementById("form");

var eventsList = [];

renderEvents();

// function that creates an input area for each event from 9am to 5 pm (total hours = 9)
function renderEvents() {
    inputArea.innerHTML = "";

    for (var i = 0; i <= 9; i++) {
        var event = eventsList[i];

        var input = document.createElement("input");
        input.textContent = event;
        inputArea.appendChild(input);
        console.log(inputArea);

        var button = document.createElement("button");
        button.textContent = "Save";
        inputArea.appendChild(button);
        button.style.backgroundColor = "DodgerBlue";
        button.style.color = "white";
       
    }
}