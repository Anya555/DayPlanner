
// displaying current day once the page loads using $(document).ready(function()

$(document).ready(function(){

  var currentDay = moment().format('dddd, MMMM Do');

  var h2 = $("<h2>");
  h2.text(currentDay);
  $("#day").append(h2);
//   row.addClass("col-12 offset-5");

});

//-------------------------------------------------------------------------------------------------------//

var hour = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];

renderEvents();

// function that creates an input area for each hour, event from 9am to 5 pm (total hours = 9) and save buttons
function renderEvents() {


    for (var i = 0; i < 9; i++) {
        var now = hour[i];
        
    // making a row    
        var row = $("<div>");
        row.addClass("row");

    // input area for hours
        var hourBlock = $("<div>");
        hourBlock.addClass("col-1 hour-block");
        hourBlock.text(hour[i]);

    // input area for user to write down the events
        var textBlock = $("<div>");
        textBlock.addClass("col-6 text-block");
        var textarea = $("<textarea>");
        textarea.value = event;
        textBlock.append(textarea);

    // creating save buttons    
        var saveBlock = $("<div>");
        saveBlock.addClass("col-1 save-block");
        var button = $("<button>");
        button.text("Save");
        saveBlock.append(button);
        
        row.append(hourBlock);
        row.append(textBlock);
        row.append(saveBlock);

        $("#put-calendar-here").append(row);
        row.addClass("col-12 offset-2");
    }
}

//-------------------------------------------------------------------------------------------------//

// function that displays a current hour 


